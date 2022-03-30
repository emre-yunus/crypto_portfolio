import React, {createContext, useContext, useMemo, useState} from 'react';

const WatchListContext = createContext();

export function WatchListProvider(props) {
    const [currencyPairs, setCurrencyPairs] = useState([]);

    const api = useMemo(() => ({currencyPairs, setCurrencyPairs}),
        [currencyPairs, setCurrencyPairs]);

    return (
        <WatchListContext.Provider value={api}>
            {props.children}
        </WatchListContext.Provider>
    )
}

export const useWatchListContext = () => useContext(WatchListContext);