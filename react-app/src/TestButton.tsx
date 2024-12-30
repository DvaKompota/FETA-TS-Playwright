import React, { useState } from 'react';
import { buttonStyles, hoverStyle, styled } from './styles';

interface TestButtonProps {
    onClick: () => void;
    text: string;
}

export const TestButton: React.FC<TestButtonProps> = ({ onClick, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    const Button = styled('button', { 
        ...buttonStyles.base,
        backgroundColor: isHovered ? hoverStyle.backgroundColor : buttonStyles.base.backgroundColor
    });

    return (
        <Button 
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
        </Button>
    );
};