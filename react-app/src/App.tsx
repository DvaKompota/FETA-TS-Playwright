import React, { useState } from 'react';
import { TestButton } from './TestButton';
import { CustomDropdown } from './CustomDropdown';
import { StandardDropdown } from './StandardDropdown';
import { MultiSelectDropdown } from './MultiSelectDropdown';
import { appStyles } from './styles';
import { BorderWrapper } from './BorderWrapper';

export const App: React.FC = () => {
  const [pushed, setPushed] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div style={appStyles.appContainer}>
      <h1 style={appStyles.heading}>Production Terminal</h1>
      <BorderWrapper label="Test Buttons" orientation="vertical" width="300px" height="220px">
        <TestButton onClick={() => {}} text="Click" type="click" />
        <TestButton onClick={() => setPushed(!pushed)} text={pushed ? 'Pushed' : 'Push'} type="push" />
        <TestButton onClick={() => setDisabled(true)} text={disabled ? 'Disabled' : 'Disable'} type="toggle" />
      </BorderWrapper>
      <BorderWrapper label="Test Dropdowns" orientation="vertical" width="300px" height="220px">
        <StandardDropdown options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']} />
        <CustomDropdown options={['Option A', 'Option B', 'Option C', 'Option D', 'Option E']} />
        <MultiSelectDropdown options={['Option X', 'Option Y', 'Option Z', 'Option W', 'Option V']} />
      </BorderWrapper>
    </div>
  );
};
