import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import DecksScreen from "../screens/DecksScreen";
import CardsScreen from "../screens/CardsScreen";

const TabScreen = createMaterialTopTabNavigator(
  {
    Decks: { screen: DecksScreen },
    Cards: { screen: CardsScreen }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#F8F8F8",
      indicatorStyle: {
        borderBottomColor: "#AA7700",
        borderBottomWidth: 3
      },
      style: {
        backgroundColor: "#AA0000"
      },
      labelStyle: {
        textAlign: "center"
      }
    },
    defaultNavigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName
    })
  }
);

const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#AA0000"
      },
      headerTintColor: "#FFFFFF",
      title: "Dashboard"
    }
  }
});

export default createAppContainer(App);
