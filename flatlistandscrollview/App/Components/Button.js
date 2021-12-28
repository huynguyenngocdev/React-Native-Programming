import React from "react";
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get("window").width/2.4,
    borderRadius: 6,
    padding: 11,
    borderWidth: 1,
    borderColor: "#838393"
  },
  textButton: {
    textAlign: "center",
    fontSize: 12,
    color: "#838393",
    fontWeight: "700",
  },
  themeRed: {
    borderWidth: 0,
    backgroundColor: "#D00C04",
  },
  themeRedText: {
    textAlign: "center",
    fontSize: 12,
    color: "#fff",
    fontWeight: "700",
  },
});

export default ({ text, theme }) => {
  const buttonStyles = [styles.button];
  const textButtonStyles = [styles.textButton]
  if (theme === "red") {
    buttonStyles.push(styles.themeRed);
    textButtonStyles.push(styles.themeRedText)
  } 

  return (
    <TouchableOpacity
      onPress={() => Alert.alert("Coming soon")}
      style={buttonStyles}
    >
      <Text style={textButtonStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
