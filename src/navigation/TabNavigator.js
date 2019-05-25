import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import DashboardScreen from "../screens/DashboardScreen";
import DecksScreen from "../screens/DecksScreen";
import QuizScreen from "../screens/QuizScreen";

const TabScreen = createMaterialTopTabNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    Decks: { screen: DecksScreen },
    Quiz: { screen: QuizScreen }
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
    }
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
      title: "UdaciCards"
    }
  }
});

export default createAppContainer(App);
