import { createStackNavigator, createAppContainer } from "react-navigation";

import DecksScreen from "../screens/DecksScreen";
import CardsScreen from "../screens/CardsScreen";
import NewCardScreen from "../screens/NewCardScreen";
import NewDeckScreen from "../screens/NewDeckScreen";
import QuizScreen from "../screens/QuizScreen";

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
    Cards: { screen: CardsScreen },
    NewDeck: { screen: NewDeckScreen },
    NewCard: { screen: NewCardScreen },
    Quiz: { screen: QuizScreen }
  },
  {
    initialRouteName: "Decks",
    defaultNavigationOptions: {
      ...header
    }
  }
);

export default createAppContainer(App);
