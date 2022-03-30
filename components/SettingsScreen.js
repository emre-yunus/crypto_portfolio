import {Button, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import { TriangleColorPicker } from 'react-native-color-picker'

export function SettingsScreen() {
    return(
        <>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 50}}>Chart color (in development)</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 80}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17}}>positive</Text>
                    <View style={styles.squarePositive}></View>
                    <Button title={'pick color'}/>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 17}}>negative</Text>
                    <View style={styles.squareNegative}></View>
                    <Button title={'pick color'}/>
                </View>
            </View>
            <TriangleColorPicker
                onColorSelected={color => alert(`Color selected: ${color}`)}
                style={{flex: 1}}
            />
        </>
    )
}

const styles = StyleSheet.create({
    squarePositive: {
        width: 50,
        height: 30,
        backgroundColor: "#31e708",
        margin: 20
    },
    squareNegative: {
        width: 50,
        height: 30,
        backgroundColor: '#e70909',
        margin: 20
},
});