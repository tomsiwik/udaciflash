import React from "react";
import { View } from "react-native";
import { Action, ActionButtons, ActionButton, ActionButtonText } from "../components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import { ScrollView } from "react-native-gesture-handler";

class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: "New Deck"
    // TODO: add back button
  };

  state = {
    topic: undefined
  };

  // TODO: get ID from deck here (navigation state)

  handleSaveDeck = e => {
    const { topic } = this.state;
    console.log("New deck:", { topic });
  };

  render() {
    const { topic } = this.state;
    const fullFilled = !!topic;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View />
        </ScrollView>
        <Action>
          <ActionButtons>
            <ActionButton disabled={!fullFilled} color="#AA0000" onPress={this.handleSaveDeck}>
              <ActionButtonText>Save Deck</ActionButtonText>
            </ActionButton>
          </ActionButtons>
        </Action>
      </View>
    );
  }
}

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  undefined,
  mapDispatchProps
)(NewCardScreen);
