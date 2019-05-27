import React from "react";
import { ScrollView, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Card,
  CardText,
  Action,
  ActionButton,
  ActionButtons,
  ActionButtonText,
  Answer,
  AnswerText
} from "../components";
import * as actionCreators from "../actions";

class QuizScreen extends React.Component {
  static navigationOptions = {
    title: "Quiz"
  };

  state = {
    cardIndex: 0,
    completed: false,
    revealed: false,
    score: 0
  };

  handleAnswer = correct => () => {
    const { score, completed, cardIndex } = this.state;
    const { deck, [deck]: deckCards } = this.props.decks;

    const newState = {
      revealed: false
    };

    if (correct) {
      newState.score = score + 1;
    }

    if (cardIndex + 1 < deckCards.length) {
      newState.cardIndex = cardIndex + 1;
    } else {
      newState.completed = true;
    }

    this.setState(newState);
  };

  // TODO: create flip animation of card
  handleReveal = () => {
    this.setState({ revealed: !this.state.revealed });
  };

  handleReset = () => {
    this.setState({
      revealed: false,
      cardIndex: 0,
      completed: false,
      score: 0
    });
  };

  componentDidMount = () => {
    this.handleReset();
  };

  render() {
    const { revealed, cardIndex } = this.state;
    const {
      navigation: {
        state: { deck }
      }
    } = this.props;

    const { cards } = deck;
    const cardsLeft = cards.length - cardIndex;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {completed ? (
            <View>
              <Text>TODO:</Text>
            </View>
          ) : (
            <View>
              <Card flipped={!revealed} underlayColor="#AA0000" onPress={this.handleReveal}>
                <CardText>{!revealed ? "Question" : "Answer"}</CardText>
              </Card>
              {revealed ? (
                <Answer>
                  <AnswerText>Hello World!</AnswerText>
                </Answer>
              ) : (
                <Info>Show answer by tapping the card or `Reveal` button below.</Info>
              )}
            </View>
          )}
        </ScrollView>

        {completed ? (
          <Action>
            <ActionButtons>
              <ActionButton disabled={!revealed} color="#AA0000" onPress={this.handleRestart}>
                <ActionButtonText>Restart Quiz</ActionButtonText>
              </ActionButton>
            </ActionButtons>
            <ActionButtons>
              <ActionButton disabled={!revealed} color="#AA0000" onPress={this.handleBackToDeck}>
                <ActionButtonText>Back to Deck</ActionButtonText>
              </ActionButton>
            </ActionButtons>
          </Action>
        ) : (
          <Action>
            <ActionButtons>
              <ActionButton disabled={!revealed} color="#AA0000" onPress={this.handleAnswer(false)}>
                <ActionButtonText disabled={!revealed}>Incorrect</ActionButtonText>
              </ActionButton>
            </ActionButtons>
            <ActionButtons>
              <ActionButton disabled={!revealed} color="#00AA00" onPress={this.handleAnswer(true)}>
                <ActionButtonText disabled={!revealed}>Correct</ActionButtonText>
              </ActionButton>
            </ActionButtons>
          </Action>
        )}
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
)(QuizScreen);
