import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { registerRootComponent } from "expo";
import React from "react";
import App from "src/App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

const Root = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);

registerRootComponent(Root);
