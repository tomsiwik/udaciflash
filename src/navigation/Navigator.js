import { createStackNavigator, createAppContainer } from "react-navigation";

import DecksScreen from "../screens/DecksScreen";
import CardsScreen from "../screens/CardsScreen";

const header = {
  headerStyle: {
    backgroundColor: "#AA0000"
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#ffffff"
  }
};

const App = createStackNavigator(
  {
    Decks: { screen: DecksScreen },
    Cards: { screen: CardsScreen }
  },
  {
    initialRouteName: "Decks",
    defaultNavigationOptions: {
      ...header
    }
  }
);

export default createAppContainer(App);
