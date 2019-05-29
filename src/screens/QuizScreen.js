import React from "react";
import { ScrollView, View, Text } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  FlipCard,
  Headline,
  HeadlineContainer,
  Action,
  ActionButton,
  ActionButtons,
  ActionButtonText,
  Info
} from "../components";
import * as actionCreators from "../actions";
import { pauseTodaysNotification } from "../utils";

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

  handleAnswer = correct => e => {
    const { score, cardIndex } = this.state;
    const {
      navigation: {
        state: {
          params: { deck }
        }
      }
    } = this.props;
    const { cards } = deck;

    const newState = {
      revealed: false
    };

    if (correct) {
      newState.score = score + 1;
    }

    if (cardIndex + 1 < cards.length) {
      newState.cardIndex = cardIndex + 1;
    } else {
      pauseTodaysNotification();
      newState.completed = true;
    }

    this.setState(newState);
  };

  // TODO: create flip animation of card
  handleReveal = () => {
    this.setState({ revealed: !this.state.revealed });
  };

  handleBackToDeck = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  handleReset = e => {
    this.setState({
      cardIndex: 0,
      completed: false,
      revealed: false,
      score: 0
    });
  };

  componentDidMount = () => {
    this.handleReset();
  };

  render() {
    const { revealed, completed, cardIndex, score } = this.state;
    const {
      navigation: {
        state: {
          params: { deck }
        }
      }
    } = this.props;

    const { cards } = deck;
    const card = cards[cardIndex];
    const cardsLeft = cards.length - cardIndex;
    const procCorrect = (score / cards.length) * 100;

    return (
      <View style={{ flex: 1 }}>
        {completed ? (
          <Info>Completed: {parseInt(procCorrect)}% Correct</Info>
        ) : (
          <>
            <HeadlineContainer>
              <Headline>{revealed ? "Answer" : "Question"}</Headline>
              <Headline>{cardsLeft - (revealed ? 1 : 0)} remaining</Headline>
            </HeadlineContainer>
            <FlipCard
              flipped={revealed}
              question={card.question}
              answer={card.answer}
              onPress={this.handleReveal}
            />
          </>
        )}

        {completed ? (
          <Action>
            <ActionButtons>
              <ActionButton color="#AA0000" onPress={this.handleReset}>
                <ActionButtonText>Restart Quiz</ActionButtonText>
              </ActionButton>
            </ActionButtons>
            <ActionButtons>
              <ActionButton color="#AA0000" onPress={this.handleBackToDeck}>
                <ActionButtonText>Back to Deck</ActionButtonText>
              </ActionButton>
            </ActionButtons>
          </Action>
        ) : (
          <Action>
            <ActionButtons>
              <ActionButton
                disabled={!revealed}
                color="#AA0000"
                onPress={this.handleAnswer(false)}
              >
                <ActionButtonText disabled={!revealed}>
                  Incorrect
                </ActionButtonText>
              </ActionButton>
            </ActionButtons>
            <ActionButtons>
              <ActionButton
                disabled={!revealed}
                color="#00AA00"
                onPress={this.handleAnswer(true)}
              >
                <ActionButtonText disabled={!revealed}>
                  Correct
                </ActionButtonText>
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
