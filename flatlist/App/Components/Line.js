import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: "#b0b0b0",
  },
});

export default () => (
  <View>
    <View style={styles.line} />
  </View>
);
