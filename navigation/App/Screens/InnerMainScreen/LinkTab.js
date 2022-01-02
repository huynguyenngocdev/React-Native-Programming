import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default ({ route }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{route.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E5E5E5",
  },
  text: {
    color: "#000",
    fontSize: 18,
  },
});
