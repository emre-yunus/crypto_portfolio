import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {SearchScreen} from "./components/SearchScreen";
import {PortfolioScreen} from "./components/PortfolioScreen";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {CurrenciesProvider} from "./contexts/currenciesContext";
import {WatchListProvider} from "./contexts/watchListContext";
import {HomeScreen} from "./components/HomeScreen";
import {InfoScreen} from "./components/InfoScreen";

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function Charts() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        </Tab.Navigator>
    )
}

function ProvidedApp() {
  return (
      <>
          <Banner/>
          <NavigationContainer>
              <Drawer.Navigator>
                  <Drawer.Screen name="Home" component={HomeScreen} />
                  <Drawer.Screen name="Charts" component={Charts} />
                  <Drawer.Screen name="Info" component={InfoScreen} />
              </Drawer.Navigator>
          </NavigationContainer>
      </>
  )
}

//Without this component the app overlaps with the statusbar
function Banner() {
    return(
        <>
            <Text></Text>
        </>
    )
}

export default function App() {
  return (
      <CurrenciesProvider>
          <WatchListProvider>
              <ProvidedApp/>
          </WatchListProvider>
      </CurrenciesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
