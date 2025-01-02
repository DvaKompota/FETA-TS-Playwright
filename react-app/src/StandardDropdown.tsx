import React from 'react';
import { appStyles } from './styles';

interface StandardDropdownProps {
  options: string[];
}

export const StandardDropdown: React.FC<StandardDropdownProps> = ({ options }) => {
  return (
    <select style={appStyles.dropdown} defaultValue="">
      <option value="" disabled style={appStyles.customDropdownItem}>
        Standard Dropdown
      </option>
      {options.map((option) => (
        <option key={option} value={option} style={appStyles.customDropdownItem}>
          {option}
        </option>
      ))}
    </select>
  );
};
