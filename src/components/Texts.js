import React from "react";
import styled from "@emotion/native";

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
  font-size: 18px;
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

export const Headline = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const HeadlineContainer = styled.View`
  padding: 20px;
  background-color: #aa0000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
