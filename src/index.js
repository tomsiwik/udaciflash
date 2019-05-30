import React from "react";
import { registerRootComponent } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middlewares from "./middlewares";
import reducers from "./reducers";
import App from "./App";
import { MainContainer } from "./components";

const store = createStore(reducers, middlewares);

const Root = () => (
  <MainContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </MainContainer>
);

export default registerRootComponent(Root);
