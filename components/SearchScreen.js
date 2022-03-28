import {useCallback, useEffect, useState} from "react";
import {Button, Text, View, ScrollView} from "react-native";
import {Searchbar} from "react-native-paper";
import {Chart} from "./Chart";
import {useCurrenciesContext} from "../contexts/currenciesContext";
import ScrollViewBase from "react-native-web/dist/exports/ScrollView/ScrollViewBase";

export function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const [baseId, setBaseId] = useState("bitcoin");
    const [quoteId, setQuoteId] = useState("tether");

    const onChangeSearch = (query) => setSearchQuery(query);
    const changeList = () => {setFilter(searchQuery)};

    return(
        <>
            <Button title={"Add to watchlist"}/>
            <Chart baseId={baseId} quoteId={quoteId}/>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onIconPress={changeList}
                onSubmitEditing={changeList}
                value={searchQuery}
            />
            <ListOfCurrencies setBaseId={setBaseId} setQuoteId={setQuoteId} filter={filter}/>
        </>
    )
}

function ListOfCurrencies(props) {
    const {currencies} = useCurrenciesContext();
    const [currencyList, setCurrencyList] = useState(currencies);
    const {setBaseId, setQuoteId, filter} = props;

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
                        setBaseId(c[0]);
                        setQuoteId(c[2]);
                    }} key={i} title={`${c[0]} (${c[1]}) / ${c[2]} (${c[3]})`}/>)}
            </ScrollView>
        </View>
    )
}