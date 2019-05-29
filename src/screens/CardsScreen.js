import React from "react";
import { FlatList, View, Text } from "react-native";
import { Card, CardText, Empty, Action, ActionButtons, ActionButton, ActionButtonText } from "../components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

class CardsScreen extends React.Component {
  static navigationOptions = {
    title: "Cards"
    // TODO: add back button
  };

  handleSelectCard = item => e => {
    console.log(item);
  };

  handleAddCard = e => {
    const {
      navigation: {
        navigate,
        state: {
          params: { deckId }
        }
      },
      actions: { addCard }
    } = this.props;

    navigate("NewCard", { deckId, save: addCard });
  };

  handleStartQuiz = e => {
    const {
      navigation: {
        navigate,
        state: {
          params: { deckId }
        }
      },
      decks
    } = this.props;

    navigate("Quiz", { deck: decks[deckId] });
  };

  render() {
    const {
      navigation: {
        state: {
          params: { deckId }
        }
      },
      decks
    } = this.props;

    const deck = decks[deckId];
    const cards = deck ? deck.cards : [];
    const deckEmpty = cards.length == 0;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={cards}
          ListEmptyComponent={() => (
            <Empty>
              {deck && deckEmpty
                ? "Your card list is empty. Add card with the button below."
                : "You didn't select a deck. Select one in `Decks`."}
            </Empty>
          )}
          renderItem={({ item }) => (
            <Card onPress={this.handleSelectCard(item)}>
              <CardText>{item.question}</CardText>
            </Card>
          )}
        />
        <Action>
          <ActionButtons>
            <ActionButton color="#AA0000" onPress={this.handleAddCard}>
              <ActionButtonText>Add Card</ActionButtonText>
            </ActionButton>
          </ActionButtons>
          <ActionButtons>
            <ActionButton disabled={deckEmpty} color="#00AA00" onPress={this.handleStartQuiz}>
              <ActionButtonText disabled={deckEmpty}>Start Quiz</ActionButtonText>
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
)(CardsScreen);
