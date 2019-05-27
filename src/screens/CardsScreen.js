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

  handleAddCard = item => e => {
    const {
      navigation: { navigate }
    } = this.props;

    // TODO: get deckId from navigation
    navigate("NewCard", { id: item.id, deckId: undefined });
  };

  handleStartQuiz = e => {
    const {
      navigation: { navigate },
      decks
    } = this.props;

    // TODO: get deckId from navigation
    navigate("Quiz", { deck: decks[1 /* PUT ID HERE */] });
  };

  render() {
    const { navigation, decks } = this.props;

    // TODO: get deck ID from navigation state
    console.log(navigation.state);

    const deckEmpty = decks[1] && deck[1].cards.length > 0;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={[]}
          ListEmptyComponent={() => (
            <Empty>
              {deck
                ? "Your card list is empty. Add card with the button below."
                : "You didn't select a deck. Select one in `Decks`."}
            </Empty>
          )}
          renderItem={({ item }) => (
            <Card onPress={this.handleSelectCard(item)}>
              <CardText>{item.name}</CardText>
            </Card>
          )}
        />
        <Action>
          <ActionButtons>
            <ActionButton disabled={deckEmpty} color="#AA0000" onPress={this.handleAddCard}>
              <ActionButtonText disabled={deckEmpty}>Add Card</ActionButtonText>
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
