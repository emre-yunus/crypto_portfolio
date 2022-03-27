import {Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {SearchScreen} from "./components/SearchScreen";
import {PortfolioScreen} from "./components/PortfolioScreen";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function ProvidedApp() {
  return (
      <>
          <Banner/>
          <NavigationContainer>
              <Tab.Navigator>
                  <Tab.Screen name="Search" component={SearchScreen} />
                  <Tab.Screen name="Portfolio" component={PortfolioScreen} />
              </Tab.Navigator>
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
      <ProvidedApp/>
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
