import React from "react";

import { Animated } from "react-native";
import { Text, View } from "react-native";
import styled from "@emotion/native";

export const Question = styled.View`
  padding: 20px;
  margin: 20px;
  background: #f9f9f9;
  border-radius: 10px;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
`;

const x = Animated.AnimatedInterpolation;

export class FlipCard extends React.Component {
  state = {
    answerOpacity: new Animated.Value(0),
    questionOpacity: new Animated.Value(1)
  };

  fade = (target, fromValue, toValue) => {
    this.setState(
      {
        [target]: new Animated.Value(fromValue)
      },
      () =>
        Animated.timing(this.state[target], {
          toValue,
          duration: 1000
        }).start()
    );
  };

  render() {
    const { question, answer, flipped } = this.props;

    // TODO: native react animation: fadeOut, fadeIn
    // skewIn, skewOut

    return (
      <View>
        <Question>
          <QuestionText>{question}</QuestionText>
          {/* TODO: add reveal Button */}
        </Question>
        <Answer>
          <AnswerText>{answer}</AnswerText>
        </Answer>
      </View>
    );
  }
}
