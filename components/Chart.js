import {View, Text} from "react-native";
import {useEffect, useState} from "react";
import {VictoryAxis, VictoryCandlestick, VictoryChart, VictoryTheme} from "victory-native";
import {useColorContext} from "../contexts/colorContext";

const initialData = [
    {x: new Date(2016, 6, 1), open: 10, close: 14.45454648500, high: 15, low: 4},
    {x: new Date(2016, 6, 2), open: 10, close: 15, high: 16, low: 5},
    {x: new Date(2016, 6, 3), open: 10, close: 15, high: 16, low: 5},
    {x: new Date(2016, 6, 4), open: 10, close: 15, high: 16, low: 5}
];

export function Chart(props) {
    const {baseId, quoteId} = props;
    const [data, setData] = useState(initialData);
    const {colorPositive, colorNegative} = useColorContext();


    useEffect(() => {
        async function settingData() {
            setData(await fetchData(baseId, quoteId))
        };
        settingData();
    }, [baseId, quoteId, setData]);

    return(
        <View>
            <Text>{baseId} / {quoteId}</Text>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 25 }}
                scale={{ x: "time" }}
            >
                <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
                <VictoryAxis dependentAxis

                />
                <VictoryCandlestick
                    candleColors={{ positive: colorPositive, negative: colorNegative }}
                    data={
                        data.slice(-30)
                    }
                />
            </VictoryChart>
        </View>
    )
}

async function fetchData(baseId, quoteId) {

    // this function will be the one fetching the data via the REST api
    let apiData = []
    let chartData = [];

    try {
        const url = `https://api.coincap.io/v2/candles?exchange=binance&interval=d1&baseId=${baseId}&quoteId=${quoteId}`
        const response = await fetch(
            url
        );
        const responseJson = await response.json();
        apiData.push(responseJson);
        apiData[0]["data"].map(o => {
            const timestamp = new Date(o["period"]); // timezone: GMT+0100
            chartData.push(
                {x: timestamp, open: o["open"], close: o["close"], high: o["high"], low: o["low"]}
            )
        });
        return chartData;
    } catch (error) {
        console.error(error);
        console.log("Error has occurred: API couldn't fetch prices data")
    }
}