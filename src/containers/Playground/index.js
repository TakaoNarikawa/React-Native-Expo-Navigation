import React from "react";
import Checkbox from "./checkbox";
import ButtonPlayground from "./button";
import { createStackNavigator } from "@react-navigation/stack";
import { proc } from "react-native-reanimated";

const Stack = createStackNavigator();

const View = () => (
  <>
    <Checkbox />
    <ButtonPlayground />
  </>
);

const WithHeader = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={View}
      options={{
        title: "Playground",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  </Stack.Navigator>
);

export default WithHeader;

const [infos, setInfos] = useState([
  {
    price: 120, count: 1
  },
  {
    price: 160, count: 2
  }
]);

const
