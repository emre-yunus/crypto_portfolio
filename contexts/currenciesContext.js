import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';

const CurrenciesContext = createContext();

export function CurrenciesProvider(props) {
    const [currencies, setCurrencies] = useState([]);

    const getCurrencies = useCallback(async () => {
        // this function will be the one fetching the data via the REST api
        let apiData = [];
        let symbols = [];

        try {
            console.log("fetching symbols data...")
            const response = await fetch(
                'https://api.coincap.io/v2/markets?exchangeId=binance&limit=2000'
            );
            const responseJson = await response.json();
            apiData.push(responseJson)
            //apiData[0]["data"].map(o => symbols[o["name"]] = o["symbol"]); // puts names and symbols of currencies in symbols object useState({})
            //apiData[0]["data"].map(o => symbols[0][o["name"]] = o["symbol"]); //for object in array useState([{}])
            apiData[0]["data"].map((v, i) => {symbols[i] = [v["baseId"], v["baseSymbol"], v["quoteId"], v["quoteSymbol"]]});
            setCurrencies(symbols);
            return symbols;
        } catch (error) {
            console.error(error);
            console.log("Error has occurred: API couldn't fetch symbols data")
        }
    }, [setCurrencies]);

    useEffect(() => getCurrencies(), []); //only happens on first render

    const api = useMemo(() => ({currencies, setCurrencies, getCurrencies}),
        [currencies, setCurrencies, getCurrencies]);

    return (
        <CurrenciesContext.Provider value={api}>
            {props.children}
        </CurrenciesContext.Provider>
    )
}

export const useCurrenciesContext = () => useContext(CurrenciesContext);