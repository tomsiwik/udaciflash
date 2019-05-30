import React from "react";
import { FlatList } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

import {
  Container,
  ListItem,
  Action,
  ActionButtons,
  ActionButton,
  ActionButtonText
} from "../components";

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
      <Container>
        <FlatList
          data={Object.values(decks || {})}
          keyExtractor={item => `${item.topic}_${item.id}`}
          renderItem={({ item }) => (
            <ListItem
              onPress={this.handleSelectDeck(item)}
              selected={item.id === deck}
            >
              {item.topic} ({item.cards ? item.cards.length : 0} Cards)
            </ListItem>
          )}
        />
        <Action>
          <ActionButtons>
            <ActionButton color="#AA0000" onPress={this.handleAddDeck}>
              <ActionButtonText>Add Deck</ActionButtonText>
            </ActionButton>
          </ActionButtons>
        </Action>
      </Container>
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
