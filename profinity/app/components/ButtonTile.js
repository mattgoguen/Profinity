import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

/**
 * A customizable button tile with a FontAwesome logo and some text.
 *
 * @param title text to display
 * @param icon FontAwesome icon name, make sure to include in library in App.js
 * @param style styling of the background tile
 * @param textStyle styling of the text
 * @param onPress callback function for user press
 */
const ButtonTile = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}
    >
      <View style={styles.content}>
        <FontAwesomeIcon
          icon={props.icon}
          size={50}
          style={styles.icon}
        ></FontAwesomeIcon>
        <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    display: "flex",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#2AC062",
    shadowColor: "#2AC062",
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,

    borderWidth: 10,
    borderColor: "#000000"
  },
  text: {
    fontSize: 18,
    color: "#FFFFFF"
  },
  icon: {
    alignSelf: "center"
  },
  content: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000000"
  }
});

export default ButtonTile;
