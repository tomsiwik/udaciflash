import React from "react";
import styled, { css } from "@emotion/native";

export const Card = styled.TouchableHighlight`
  display: flex;
  padding: 20px;
  margin-bottom: 1px;
`;

export const CardText = styled.Text`
  font-size: 18px;
  color: ${props => (props.selected ? "#AA0000" : "#333333")};
  font-weight: ${props => (props.selected ? 900 : 400)};
`;

const EmptyText = styled.Text`
  font-size: 20px;
  margin: 50px;
  text-align: center;
  line-height: 40px;
`;

const EmptyContainer = styled.View`
  padding: 20px;
`;

export const Empty = ({ children, ...props }) => (
  <EmptyContainer {...props}>
    <EmptyText>{children}</EmptyText>
  </EmptyContainer>
);

const InfoText = styled.Text`
  font-size: 12px;
  margin: 40px;
  text-align: center;
  line-height: 30px;
`;

const InfoContainer = styled.View`
  padding: 20px;
`;

export const Info = ({ children, ...props }) => (
  <InfoContainer {...props}>
    <InfoText>{children}</InfoText>
  </InfoContainer>
);
