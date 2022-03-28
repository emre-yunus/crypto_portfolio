import {useState} from "react";
import {Button, Text, View, ScrollView} from "react-native";
import {Searchbar} from "react-native-paper";
import {Chart} from "./Chart";
import {useCurrenciesContext} from "../contexts/currenciesContext";

export function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [list, setList] = useState([]);
    const [baseId, setBaseId] = useState("bitcoin");
    const [quoteId, setQuoteId] = useState("tether");

    const onChangeSearch = (query) => setSearchQuery(query);
    const changeList = () => {setList([...list, searchQuery])};

    return(
        <>
            <Chart baseId={baseId} quoteId={quoteId}/>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onIconPress={changeList}
                onSubmitEditing={changeList}
                value={searchQuery}
            />
            <ListOfCurrencies setBaseId={setBaseId} setQuoteId={setQuoteId}/>
        </>
    )
}

function ListOfCurrencies(props) {
    const {currencies, setCurrencies} = useCurrenciesContext();
    const {setBaseId, setQuoteId} = props;

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                {currencies.map((c, i) => <Button onPress={() => {
                    setBaseId(c[0]);
                    setQuoteId(c[2]);
                }} key={i} title={`${c[0]} (${c[1]}) / ${c[2]} (${c[3]})`}/>)}
            </ScrollView>
        </View>
    )
}