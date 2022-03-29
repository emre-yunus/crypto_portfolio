import {Button} from "react-native";
import {useWatchListContext} from "../contexts/watchListContext";
import {Chart} from "./Chart";
import {ScrollView} from "react-native";

export function PortfolioScreen() {
    const {currencyPairs} = useWatchListContext();

    return(
        <ScrollView>
            {currencyPairs.map((c, i) => <PortfolioChart key={i} baseId={c[0]} quoteId={c[1]}/>)}
        </ScrollView>
    )
}

function PortfolioChart(props) {
    const {baseId, quoteId} = props;
    const {currencyPairs, setCurrencyPairs} = useWatchListContext();

    //TODO: when removing two charts from watchlist --> error --> fix it.
    const removeFromWatchlist = () => {setCurrencyPairs(currencyPairs.filter(c => (c[0] !== baseId || c[1] !== quoteId)));}

    return (
        <>
            <Chart baseId={baseId} quoteId={quoteId}/>
            <Button onPress={removeFromWatchlist} title={"Remove Chart"}/>
        </>
    )
}