import {useCallback, useEffect, useState} from "react";
import {Button, Text, View, ScrollView} from "react-native";
import {Searchbar} from "react-native-paper";
import {Chart} from "./Chart";
import {useCurrenciesContext} from "../contexts/currenciesContext";
import {useWatchListContext} from "../contexts/watchListContext";

export function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [shownCurrency, setShownCurrency] = useState(["bitcoin", "tether"]);
    const {currencyPairs, setCurrencyPairs} = useWatchListContext(); //list of pairs shown on watchlist

    const onChangeSearch = (query) => setSearchQuery(query);
    const changeList = () => {setFilter(searchQuery)};


    const addToPortfolio = () => {
        let add = true;
        for (let i = 0; i < currencyPairs.length; i++) {
            if(currencyPairs[i][0] === shownCurrency[0] && currencyPairs[i][1] === shownCurrency[1]) {
                add = false;
            }
        }
        if(add) setCurrencyPairs([...currencyPairs, [shownCurrency[0], shownCurrency[1]]]);
    };

    return(
        <>
            <Button onPress={addToPortfolio} title={"Add to watchlist"}/>
            <Chart baseId={shownCurrency[0]} quoteId={shownCurrency[1]}/>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onIconPress={changeList}
                onSubmitEditing={changeList}
                value={searchQuery}
            />
            <ListOfCurrencies setShownCurrency={setShownCurrency} filter={filter}/>
        </>
    )
}

function ListOfCurrencies(props) {
    const {currencies} = useCurrenciesContext();
    const [currencyList, setCurrencyList] = useState(currencies);
    const {setShownCurrency, filter} = props;

    useEffect(() => {setCurrencyList(currencies)}, [currencies]);

    useEffect(() => {
        setCurrencyList(currencies.filter((c) => {
            return (c[0].toLowerCase().includes(filter.toLowerCase()) ||
                    c[1].toLowerCase().includes(filter.toLowerCase()) ||
                    c[2].toLowerCase().includes(filter.toLowerCase()) ||
                    c[3].toLowerCase().includes(filter.toLowerCase())
            )
        }));
    }, [filter]);

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                {currencyList.map((c, i) =>
                    <Button onPress={() => {
                        setShownCurrency([c[0], c[2]]);
                    }} key={i} title={`${c[0]} (${c[1]}) / ${c[2]} (${c[3]})`}/>)}
            </ScrollView>
        </View>
    )
}