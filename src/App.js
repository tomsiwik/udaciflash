import React from "react";
import { createStore, compose } from "redux";
import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { TabNavigator } from "./navigation";

import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(/* middlewares */));

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Main: TabNavigator
  })
);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </View>
    );
  }
}

export default registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
