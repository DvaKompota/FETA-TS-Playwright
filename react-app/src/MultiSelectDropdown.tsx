import React, { useState, useEffect, useRef } from 'react';
import { appStyles, Colors } from './styles';

interface MultiSelectDropdownProps {
  options: string[];
}

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option) ? prevSelected.filter((item) => item !== option) : [...prevSelected, option]
    );
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', width: '100%' }}>
      <div style={appStyles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Multi-select Dropdown'}
      </div>
      {isOpen && (
        <div style={appStyles.customDropdownMenu}>
          <ul style={appStyles.customDropdownList}>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                style={{
                  ...appStyles.customDropdownItem,
                  backgroundColor: selectedOptions.includes(option) ? Colors.DarkGreen : Colors.Black,
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
