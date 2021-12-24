import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;
// const buttonWidth = 90;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 40,
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#333333",
    flex: 0,
    width: Math.floor(buttonWidth - 15),
    height: Math.floor(buttonWidth - 15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth - 15),
    margin: 5,
  },
  buttonDouble: {
    flex: 0,
    backgroundColor: "#fe9693",
    height: (75+5) * 2,
    width: 75,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
});

export default ({ onPress, text, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (theme === "double") {
    buttonStyles.push(styles.buttonDouble);
  } else if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
