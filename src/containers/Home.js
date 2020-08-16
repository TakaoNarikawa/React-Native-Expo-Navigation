import React from "react";
import { Text } from "react-native";
import CenterView from "src/components/CenterView";

/*
Drawerを扱う場合

const Home = ({navigation}) => (
  <Button onPress={navigation.openDrawer} title="Open navigation drawer" />
)
*/

const Home = ({ navigation }) => (
  <>
    <CenterView>
      <Text>ホーム画面</Text>
    </CenterView>
  </>
);

export default Home;
