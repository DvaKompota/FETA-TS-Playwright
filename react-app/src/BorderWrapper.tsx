import React from 'react';
import { appStyles } from './styles';

interface BorderWrapperProps {
  label: string;
  children: React.ReactNode;
  orientation: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
}

export const BorderWrapper: React.FC<BorderWrapperProps> = ({ label, children, orientation, width, height }) => {
  const wrapperStyle: React.CSSProperties = {
    ...appStyles.wrapper,
    flexDirection: orientation === 'horizontal' ? 'row' : 'column',
    width: width || 'auto', // Use the provided width or default to 'auto'
    height: height || 'auto', // Use the provided height or default to 'auto'
  };

  return (
    <div style={wrapperStyle}>
      <div style={appStyles.label} aria-label={label}>
        {label}
      </div>
      {children}
    </div>
  );
};
