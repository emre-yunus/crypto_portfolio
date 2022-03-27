import {Text} from "react-native";
import {Searchbar} from "react-native-paper";
import {useState} from "react";

export function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [list, setList] = useState([]);

    const onChangeSearch = (query) => setSearchQuery(query);
    const changeList = () => {setList([...list, searchQuery])};

    return(
        <>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                onIconPress={changeList}
                onSubmitEditing={changeList}
                value={searchQuery}
            />
        </>
    )
}