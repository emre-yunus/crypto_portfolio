import React, {createContext, useContext, useMemo, useState} from 'react';

const ColorContext = createContext();

export function ColorProvider(props) {
    const [colorPositive, setColorPositive] = useState('#31e708');
    const [colorNegative, setColorNegative] = useState('#e70909');

    const api = useMemo(() => ({colorPositive, setColorPositive, colorNegative, setColorNegative}),
        [colorPositive, setColorPositive, colorNegative, setColorNegative]);

    return (
        <ColorContext.Provider value={api}>
            {props.children}
        </ColorContext.Provider>
    )
}

export const useColorContext = () => useContext(ColorContext);