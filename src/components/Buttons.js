import styled from "@emotion/native";

export const Action = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: "#F0F0F0"
  flex: 1,
  flex-direction: row;
`;

export const ActionButtons = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ActionButtonText = styled.Text`
  font-size: 18px;
  color: ${props => (props.disabled ? "#cccccc" : "#ffffff")};
`;

export const ActionButton = styled.TouchableOpacity`
  padding: 20px;
  text-align: ${props => (props.center ? "center" : "inherit")};
  background-color: ${props =>
    props.disabled ? "#f0f0f0" : props.color || "#f0f0f0"};
`;
