import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components";

const center = css`
  justify-content: center;
  align-items: center;
`;
const CenterView = styled.View`
  flex: 1;
  ${center};
  background-color: #f5fcff;
`;

export default CenterView;
