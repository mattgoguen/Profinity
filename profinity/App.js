import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faGift } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faGift);

// Screen imports
import HomeScreen from "./app/screens/HomeScreen";
import RewardsListScreen from "./app/screens/RewardsListScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    RewardsList: { screen: RewardsListScreen }
  },
  {
    initialRouteName: "Home",
    // Default options for header bar across screens
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
