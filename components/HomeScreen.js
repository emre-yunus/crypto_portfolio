import {Image, View} from 'react-native';
import { useWindowDimensions } from 'react-native';

export function HomeScreen() {
    const { height, width } = useWindowDimensions();

    let sideLength = width*0.8;

    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
                style={{ width: sideLength, height: sideLength, marginTop: height*0.2}}
                source={require('../assets/cryptoLogo.png')}/>
        </View>
    )
}