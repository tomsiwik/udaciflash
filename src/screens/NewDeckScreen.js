import React from "react";
import { View } from "react-native";
import {
  Action,
  ActionButtons,
  ActionButton,
  ActionButtonText
} from "../components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "../components";

class NewDeckScreen extends React.Component {
  static navigationOptions = {
    title: "New Deck"
    // TODO: add back button
  };

  state = {
    topic: undefined
  };

  handleSaveDeck = e => {
    const { topic } = this.state;
    const { navigation } = this.props;

    const {
      state: {
        params: { save }
      }
    } = navigation;

    save({ topic });
    navigation.goBack();
  };

  handleChange = e => {
    this.setState({
      topic: e.nativeEvent.text
    });
  };

  render() {
    const { topic } = this.state;
    const fullFilled = !!topic;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Input placeholder="Topic" onChange={this.handleChange} />
        </ScrollView>
        <Action>
          <ActionButtons>
            <ActionButton
              disabled={!fullFilled}
              color="#AA0000"
              onPress={this.handleSaveDeck}
            >
              <ActionButtonText>Create Deck</ActionButtonText>
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
)(NewDeckScreen);
