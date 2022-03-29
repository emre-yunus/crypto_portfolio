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


    //TODO: add button to remove from portfolio
    return (
        <>
            <Chart baseId={baseId} quoteId={quoteId}/>
            <Button title={"Remove Chart"}/>
        </>
    )
}