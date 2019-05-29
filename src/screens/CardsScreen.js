import React from "react";
import { FlatList, View } from "react-native";
import {
  ListItem,
  Empty,
  Action,
  ActionButtons,
  ActionButton,
  ActionButtonText,
  Headline,
  HeadlineContainer
} from "../components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

class CardsScreen extends React.Component {
  static navigationOptions = {
    title: "Cards"
  };

  handleSelectCard = item => e => {
    // TODO: selecting a card can reveal them?
    console.debug(item);
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
        <HeadlineContainer>
          <Headline>{deck.topic}</Headline>
          <Headline>{deck.cards.length} cards</Headline>
        </HeadlineContainer>
        <FlatList
          data={cards}
          keyExtractor={item => `${deck.topic}_card_${item.id}`}
          ListEmptyComponent={() => (
            <Empty>
              {deck && deckEmpty
                ? "Your card list is empty. Add card with the button below."
                : "You didn't select a deck. Select one in `Decks`."}
            </Empty>
          )}
          renderItem={({ item }) => (
            <ListItem
              onPress={this.handleSelectCard(item)}
              selected={item.id === deck}
            >
              {item.question}
            </ListItem>
          )}
        />
        <Action>
          <ActionButtons>
            <ActionButton color="#AA0000" onPress={this.handleAddCard}>
              <ActionButtonText>Add Card</ActionButtonText>
            </ActionButton>
          </ActionButtons>
          <ActionButtons>
            <ActionButton
              disabled={deckEmpty}
              color="#00AA00"
              onPress={this.handleStartQuiz}
            >
              <ActionButtonText disabled={deckEmpty}>
                Start Quiz
              </ActionButtonText>
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
