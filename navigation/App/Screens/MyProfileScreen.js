import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AuthContext } from "../context";

export default () => {
  const { getCurrentUser } = React.useContext(AuthContext);
console.log(getCurrentUser);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.content}>
          {getCurrentUser && getCurrentUser.name}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.content} numberOfLines={1}>
          {getCurrentUser && getCurrentUser.email}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Employed</Text>
        <Text style={styles.content} numberOfLines={1}>
          {getCurrentUser && getCurrentUser.employed}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  card: {
    flexDirection: "row",
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderColor: "#E8E8EB",
    borderWidth: 1,

    height: 48,
    width: 319,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#838393",
    marginLeft: 12,
    width: 98,
    lineHeight: 20,
  },
  content: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#141434",
  },
});
