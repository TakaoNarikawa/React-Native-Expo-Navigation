import React from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox, Layout } from "@ui-kitten/components";
import styled from "styled-components/native";

const useCheckboxState = (initialCheck = false) => {
  const [checked, setChecked] = React.useState(initialCheck);
  return { checked, onChange: setChecked };
};

const CheckboxStatusShowcase = () => {
  const primaryCheckboxState = useCheckboxState();
  const successCheckboxState = useCheckboxState();
  const infoCheckboxState = useCheckboxState();
  const warningCheckboxState = useCheckboxState();
  const dangerCheckboxState = useCheckboxState();
  const basicCheckboxState = useCheckboxState();
  const controlCheckboxState = useCheckboxState();

  return (
    <ContainerView level="1">
      <StyledCheckbox status="primary" {...primaryCheckboxState}>
        Primary
      </StyledCheckbox>

      <StyledCheckbox status="success" {...successCheckboxState}>
        Success
      </StyledCheckbox>

      <StyledCheckbox status="info" {...infoCheckboxState}>
        Info
      </StyledCheckbox>

      <StyledCheckbox status="warning" {...warningCheckboxState}>
        Warning
      </StyledCheckbox>

      <StyledCheckbox status="danger" {...dangerCheckboxState}>
        Danger
      </StyledCheckbox>

      <StyledCheckbox status="basic" {...basicCheckboxState}>
        Basic
      </StyledCheckbox>

      <ControlContainer>
        <StyledCheckbox status="control" {...controlCheckboxState}>
          Control
        </StyledCheckbox>
      </ControlContainer>
    </ContainerView>
  );
};

const ContainerView = styled(Layout)`
  flex-direction: row;
  flex-wrap: wrap;
`;
const StyledCheckbox = styled(CheckBox)`
  margin: 2px;
`;
const ControlContainer = styled.View`
  border-radius: 4px;
  margin: 2px;
  padding: 6px;
  background-color: #3366ff;
`;

export default CheckboxStatusShowcase;
