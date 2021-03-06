import {Button, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import { TriangleColorPicker } from 'react-native-color-picker'
import {useColorContext} from "../contexts/colorContext";

export function SettingsScreen() {
    const {colorPositive, setColorPositive, colorNegative, setColorNegative} = useColorContext();
    const [changeColorPositive, setChangeColorPositive] = useState(true);

    const styles = StyleSheet.create({
        squarePositive: {
            width: 50,
            height: 30,
            backgroundColor: colorPositive,
            margin: 20
        },
        squareNegative: {
            width: 50,
            height: 30,
            backgroundColor: colorNegative,
            margin: 20
        },
    });

    const pickColor = (color) => {
        if(changeColorPositive) {
            setColorPositive(color);
        } else {
            setColorNegative(color);
        }
    }

    return(
        <>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 50, marginTop: 20}}>Chart color</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 80}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17}}>positive</Text>
                    <View style={styles.squarePositive}></View>
                    <Button title={'pick color'} onPress={() => {
                                                                    setChangeColorPositive(true);
                                                                }}/>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17}}>negative</Text>
                    <View style={styles.squareNegative}></View>
                    <Button title={'pick color'} onPress={() => {
                                                                    setChangeColorPositive(false);
                                                                }}/>
                </View>
            </View>
            <TriangleColorPicker
                onColorSelected={color => pickColor(color)}
                style={{flex: 1}}
            />
        </>
    )
}