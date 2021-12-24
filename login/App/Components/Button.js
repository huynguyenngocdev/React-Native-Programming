import React from "react";
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    borderRadius: 5,
    marginTop: 10,
    padding: 15,
    width: Dimensions.get("window").width - 15,
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

export default ({ text, theme }) => {
  const buttonStyles = [styles.button];
  if (theme === "blue") {
    buttonStyles.push(styles.themeBlue);
  } else {
    buttonStyles.push(styles.themeRed);
  }

  return (
    <TouchableOpacity
      onPress={() => Alert.alert("Coming soon")}
      style={buttonStyles}
    >
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
