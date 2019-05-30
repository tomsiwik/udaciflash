import React from "react";
import styled, { css } from "@emotion/native";
import { Animated } from "react-native";

const QuestionAnswerStyle = css`
  padding: 20px;
  background: #f9f9f9;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
`;

const CenterWrapperStyle = css`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.View`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const QuestionInnerTouchable = styled.TouchableHighlight`
  ${CenterWrapperStyle}
`;

export const AnswerInnerContainer = styled.TouchableHighlight`
  ${CenterWrapperStyle}
`;

export const CardRevealHint = styled.Text`
  font-size: 18px;
  color: #aaaaaa;
  text-align: center;
  font-weight: 900;
`;

export const Question = styled(Animated.View)`
  ${QuestionAnswerStyle}
`;

export const QuestionText = styled.Text`
  font-size: 20px;
`;

export const Answer = styled(Animated.View)`
  ${QuestionAnswerStyle}
`;

export const AnswerText = styled.Text`
  font-size: 20px;
`;

export class FlipCard extends React.Component {
  state = {
    animatedFrontValue: new Animated.Value(0),
    animatedBackValue: new Animated.Value(0),
    flipped: false
  };

  handlePress = e => {
    const { flipped } = this.state;
    const { onPress = () => {} } = this.props;

    this.setState(
      {
        animatedFrontValue: new Animated.Value(0),
        animatedBackValue: new Animated.Value(0),
        flipped: !flipped
      },
      () => {
        Animated.parallel([
          Animated.timing(this.state.animatedFrontValue, {
            toValue: 1,
            useNativeDriver: true,
            delay: 200,
            duration: 200
          }),
          Animated.timing(this.state.animatedBackValue, {
            toValue: 1,
            useNativeDriver: true,
            duration: 200
          })
        ]).start();
      }
    );

    onPress(e);
  };

  resetCard() {
    this.setState({
      animatedFrontValue: new Animated.Value(0),
      animatedBackValue: new Animated.Value(0),
      flipped: false
    });
  }

  componentDidUpdate(nextProps) {
    const { question, answer } = this.props;

    if (question !== nextProps.question || answer !== nextProps.answer) {
      this.resetCard();
    }
  }

  render() {
    const { animatedFrontValue, animatedBackValue } = this.state;
    const { question, answer } = this.props;

    const flipUp = animatedFrontValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["270deg", "360deg"]
    });

    const flipDown = animatedBackValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"]
    });

    const flipUpAnimationStyle = {
      transform: [{ rotateY: flipUp }]
    };

    const flipDownAnimationStyle = {
      transform: [{ rotateY: flipDown }]
    };

    return (
      <CardContainer>
        <Question style={flipDownAnimationStyle}>
          <QuestionInnerTouchable
            onPress={this.handlePress}
            underlayColor="transparent"
          >
            <>
              <QuestionText>{question}</QuestionText>
              <CardRevealHint>Tap to Show Answer</CardRevealHint>
            </>
          </QuestionInnerTouchable>
        </Question>
        <Answer style={flipUpAnimationStyle}>
          <AnswerInnerContainer>
            <AnswerText>{answer}</AnswerText>
          </AnswerInnerContainer>
        </Answer>
      </CardContainer>
    );
  }
}
