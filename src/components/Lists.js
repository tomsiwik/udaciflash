import React from "react";
import styled, { css } from "@emotion/native";
import { Divider } from "react-native-elements";

export const ListItemContainer = styled.TouchableHighlight`
  display: flex;
  margin-bottom: 1px;
`;

export const ListInnerItemContainer = styled.View`
  padding: 20px 20px 0 20px;
`;

export const ListItemText = styled.Text`
  font-size: 18px;
  color: ${props => (props.selected ? "#AA0000" : "#333333")};
  font-weight: ${props => (props.selected ? 900 : 400)};
  margin-bottom: 20px;
`;

export const ListItem = ({ children, selected, ...props }) => (
  <ListItemContainer {...props} underlayColor="#f0f0f0">
    <ListInnerItemContainer>
      <ListItemText selected={selected}>{children}</ListItemText>
      <Divider style={{ backgroundColor: "#dddddd" }} />
    </ListInnerItemContainer>
  </ListItemContainer>
);
