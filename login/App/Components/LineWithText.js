import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
  text: { width: 50, textAlign: "center" },
});

export default ({text}) => (
  <View style={styles.container}>
    <View style={styles.line} />
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
    <View style={styles.line} />
  </View>
);
