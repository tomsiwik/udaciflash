import React from "react";
import { FlatList, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

import { Card, CardText, Action, ActionButtons, ActionButton, ActionButtonText } from "../components";

class DecksScreen extends React.Component {
  static navigationOptions = {
    title: "Decks"
  };

  handleAddDeck = e => {
    const {
      navigation: { navigate },
      actions: { upsertDeck }
    } = this.props;

    navigate("NewDeck", { save: upsertDeck });
  };

  handleSelectDeck = deck => e => {
    const {
      navigation: { navigate }
    } = this.props;

    navigate("Cards", { deckId: deck.id });
  };

  render() {
    const { decks, deck } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={Object.values(decks || {})}
          renderItem={({ item }) => (
            <Card onPress={this.handleSelectDeck(item)}>
              <CardText selected={item.id === deck}>
                {item.topic} - {item.cards.length} Cards
              </CardText>
            </Card>
          )}
        />
        <Action>
          <ActionButtons>
            <ActionButton color="#AA0000" onPress={this.handleAddDeck}>
              <ActionButtonText>Add Deck</ActionButtonText>
            </ActionButton>
          </ActionButtons>
        </Action>
      </View>
    );
  }
}

const mapStateToProps = ({ decks, deck }) => ({ decks, deck });

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(DecksScreen);
