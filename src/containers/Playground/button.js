import React, { useState } from "react";
import { Button, Text } from "react-native";
import CenterView from "src/components/CenterView";

const ButtonPlayground = () => {
  const [text, setText] = useState("foooo");

  const onPressButton = () => {
    setText("barrrrr");
  };
  return (
    <CenterView>
      <Button title="Change Text" onPress={onPressButton} />
      <Text>{text}</Text>
    </CenterView>
  );
};

export default ButtonPlayground;
