import React, { useState } from 'react';
import { TestButton } from './TestButton';
import { appStyles } from './styles';

export const App: React.FC = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div style={appStyles.container}>
            <TestButton 
                onClick={() => setClicked(!clicked)}
                text={clicked ? 'OK' : 'Test'}
            />
        </div>
    );
};