import React, { Component } from "react";
import { Platform, StyleSheet, View, StatusBar } from "react-native";
import RiddleNavigator from "./src/navigation/home/RiddleNavigator";
import AppContext from "./AppContext";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu",
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      points: 0,
    };
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          change_points_by: point => this.setState({ points: this.state.points + point }),
        }}
      >
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <RiddleNavigator />
        </View>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
