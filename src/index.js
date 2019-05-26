import React from "react";
import styled from "@emotion/native";
import { registerRootComponent } from "expo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middlewares from "./middlewares";
import reducers from "./reducers";
import App from "./App";

const store = createStore(reducers, middlewares);

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const Root = () => (
  <Container>
    <Provider store={store}>
      <App />
    </Provider>
  </Container>
);

export default registerRootComponent(Root);
