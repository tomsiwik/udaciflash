import React from "react";
import { bindActionCreators } from "redux";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { Navigator } from "./navigation";
import { initRepeatingNotification } from "./utils";
import * as actionCreators from "./actions";

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Main: Navigator
  })
);

class App extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    // Repeats whenever app starts and regularly each day until quizzed (skips 1 day)
    initRepeatingNotification();

    actions.loadDecks();
  }

  render() {
    return <AppContainer />;
  }
}

const mapStateToProps = ({ decks, deck }) => ({ decks, deck });
const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(App);
