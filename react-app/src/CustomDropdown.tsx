import React, { useState, useEffect, useRef } from 'react';
import { appStyles } from './styles';

interface CustomDropdownProps {
  options: string[];
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({ options }) => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(search.toLowerCase()));

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    setSearch(''); // Clear search field when an option is selected
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setSearch(''); // Clear search field when clicking outside
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
        {selected || 'Custom Dropdown'}
      </div>
      {isOpen && (
        <div style={appStyles.customDropdownMenu}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            style={appStyles.customDropdownSearch}
          />
          <ul style={appStyles.customDropdownList}>
            {filteredOptions.map((option) => (
              <li key={option} onClick={() => handleSelect(option)} style={appStyles.customDropdownItem}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
