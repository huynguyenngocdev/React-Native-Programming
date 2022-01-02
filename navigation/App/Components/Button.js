import React from "react";
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    borderRadius: 6,
    marginVertical: 10,
    padding: 10,
  },
  themeRed: {
    backgroundColor: "#e00000",
  },
  themeBlue: {
    backgroundColor: "#141434",
  },
  textButton: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
    fontWeight: "700",
  },
});

export default ({ text, theme, onPress = ()=>Alert.alert("Coming soon")}) => {
  const buttonStyles = [styles.button];
  if (theme === "blue") {
    buttonStyles.push(styles.themeBlue);
  } else {
    buttonStyles.push(styles.themeRed);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
