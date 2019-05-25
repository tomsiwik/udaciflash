import React from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";

export default class QuizScreen extends React.Component {
  static navigationOptions = {
    title: "Quiz"
  };

  state = {
    cardIndex: 0,
    completed: false,
    revealed: false,
    score: 0
  };

  handleAnswer = correct => {
    const { score, cardIndex } = this.state;
    const { deck } = this.props;

    const newState = {
      revealed: false
    };

    if (correct) {
      newState.score = score + 1;
    }

    if (cardIndex + 1 < deck.length) {
      newState.cardIndex = cardIndex + 1;
    } else {
      newState.completed = true;
    }

    this.setState(newState);
  };

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
    const { revealed } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {!revealed && (
            <View
              style={styles.unrevealedContainer}
              onTouchEnd={this.handleReveal}
            >
              <Text style={styles.unrevealedTitle}>Question:</Text>
              <Text style={styles.unrevealedText}>Question</Text>
            </View>
          )}
          {revealed && (
            <View
              style={styles.revealedContainer}
              onTouchEnd={this.handleReveal}
            >
              <Text style={styles.revealedTitle}>Answer:</Text>
              <Text style={styles.revealedText}>Answer</Text>
            </View>
          )}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonFlex}>
            <Button
              disabled={!revealed}
              style={styles.button}
              title="Correct"
              color="#00AA00"
            />
          </View>
          <View style={styles.buttonFlex}>
            <Button
              disabled={!revealed}
              style={styles.button}
              title="Wrong"
              color="#AA0000"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {},
  revealedContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: "#AA0000"
  },
  revealedText: {
    padding: 20,
    color: "#FFFFFF",
    fontWeight: "400"
  },
  revealedTitle: {
    fontWeight: "900"
  },
  unrevealedContainer: {
    margin: 10,
    padding: 20,
    backgroundColor: "#F0F0F0"
  },
  unrevealedText: {
    padding: 20,
    color: "#000000",
    fontWeight: "400"
  },
  unrevealedTitle: {
    fontWeight: "900"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F0F0F0",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 65
  },
  buttonFlex: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    height: 65
  },
  button: {
    width: "50%"
  }
});
