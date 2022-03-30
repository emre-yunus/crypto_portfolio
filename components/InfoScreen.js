import {Image, Text, useWindowDimensions, View} from "react-native";

export function InfoScreen() {
    const { height, width } = useWindowDimensions();
    return(
        <View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 30, paddingRight: 30}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 30, marginTop: 10 }}>Candlestick charts explained</Text>
            <Image
                style={{ width: width*0.7, height: height*0.25}}
                source={require('../assets/candlechartanatomy.jpg')}/>
            <Text style={{ marginTop: 10 }}>
                Candlestick charts originated in Japan over 100 years before the West developed the bar and point-and-figure charts. In the 1700s, a Japanese man named Homma discovered that, while there was a link between price and the supply and demand of rice, the markets were strongly influenced by the emotions of traders.1
                Candlesticks show that emotion by visually representing the size of price moves with different colors. Traders use the candlesticks to make trading decisions based on regularly occurring patterns that help forecast the short-term direction of the price.

                Just like a bar chart, a daily candlestick shows the market's open, high, low, and close price for the day. The candlestick has a wide part, which is called the "real body."
                This real body represents the price range between the open and close of that day's trading. When the real body is filled in or black, it means the close was lower than the open. If the real body is empty, it means the close was higher than the open.
            </Text>
        </View>
    )
}