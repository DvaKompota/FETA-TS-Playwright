import React, { useState } from 'react';
import { appStyles, hoverStyle, styled, Colors, Opacity } from './styles';

interface TestButtonProps {
  onClick: () => void;
  text: string;
  type: 'click' | 'push' | 'toggle';
}

export const TestButton: React.FC<TestButtonProps> = ({ onClick, text, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleMouseDown = () => {
    if (type === 'click') {
      setIsClicked(true);
    }
  };

  const handleMouseUp = () => {
    if (type === 'click') {
      setIsClicked(false);
    }
  };

  const handleClick = () => {
    if (type === 'push') {
      setIsClicked(!isClicked);
    } else if (type === 'toggle') {
      setIsDisabled(true);
    }
    onClick();
  };

  const Button: React.ElementType = styled('button', {
    ...appStyles.button,
    backgroundColor: isHovered ? hoverStyle.backgroundColor : appStyles.button.backgroundColor,
    ...(isClicked && type === 'push' && { backgroundColor: Colors.Green + Opacity.O50 }),
    ...(isDisabled && {
      backgroundColor: Colors.DarkGreen + Opacity.O50,
      cursor: 'not-allowed',
      color: Colors.DarkGreen,
      border: `2px solid ${Colors.DarkGreen}`,
    }),
  });

  return (
    <Button
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isDisabled}
    >
      {text}
    </Button>
  );
};
