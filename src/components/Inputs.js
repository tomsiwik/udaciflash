import React from "react";
import styled from "@emotion/native";
import { Divider } from "react-native-elements";

export const InputTextContainer = styled.View`
  display: flex;
  margin-bottom: 1px;
`;

export const InputTextInnerContainer = styled.View`
  padding: 20px 20px 0 20px;
`;

export const InputText = styled.TextInput`
  font-size: 18px;
  color: ${props => (props.selected ? "#AA0000" : "#333333")};
  font-weight: ${props => (props.selected ? 900 : 400)};
  height: 60px;
`;

export const Input = ({ children, ...props }) => (
  <InputTextContainer>
    <InputTextInnerContainer>
      <InputText {...props}>{children}</InputText>
      <Divider style={{ backgroundColor: "#dddddd" }} />
    </InputTextInnerContainer>
  </InputTextContainer>
);
