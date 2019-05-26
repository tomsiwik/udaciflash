import React from "react";
import { FlatList, View, Text } from "react-native";
import {
  Card,
  CardText,
  Empty,
  Action,
  ActionButtons,
  ActionButton,
  ActionButtonText
} from "../components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

class CardsScreen extends React.Component {
  static navigationOptions = {
    title: "Cards"
  };

  handleSelectCard = item => e => {
    console.log("Selected card:", item);
  };

  render() {
    const {
      deck,
      decks: { [deck]: cards }
    } = this.props;

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
            <ActionButton
              disabled={!deck}
              center
              color="#AA0000"
              onPress={this.handleAddDeck}
            >
              <ActionButtonText>Add Card</ActionButtonText>
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
