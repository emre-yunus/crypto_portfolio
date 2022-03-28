import {Text} from "react-native";
import {useWatchListContext} from "../contexts/watchListContext";
import {Chart} from "./Chart";
import {ScrollView} from "react-native";
import {useEffect} from "react";

export function PortfolioScreen() {
    const {currencyPairs, setCurrencyPairs} = useWatchListContext();

    //useEffect(() => {setCurrencyPairs([...new Set(currencyPairs)])}, [currencyPairs]);

    //TODO: add function that removes all doubles in currencyPairs after it is altered.
    return(
        <ScrollView>
            {currencyPairs.map((c, i) => <PortfolioChart key={i} baseId={c[0]} quoteId={c[1]}/>)}
        </ScrollView>
    )
}

function PortfolioChart(props) {
    const {baseId, quoteId} = props;


    //TODO: add button to remove from portfolio
    return (
        <>
            <Chart baseId={baseId} quoteId={quoteId}/>
        </>
    )
}