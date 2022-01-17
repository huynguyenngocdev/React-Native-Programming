import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default ({ data, navigation }) => {
  const [note, setNote] = React.useState(null);
  React.useEffect(() => {
    setNote(data);
  }, []);

  const handleGoToDetail = () => {
    navigation.navigate("Details", { data: note });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleGoToDetail()}
    >
      {note ? (
        <View>
          <View style={styles.row}>
            <Text style={styles.title}>{note.note}</Text>
            <Text>
              {note.status ? (
                <Icon name="check-box-outline" color={"#01b701"} size={18} />
              ) : (
                <Icon
                  name="checkbox-blank-outline"
                  color={"#cb0000"}
                  size={18}
                />
              )}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.content} numberOfLines={2}>
              {note.content_note}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.id}>ID: {note.id}</Text>
            <Text style={styles.time}>
              {new Date(note.deadline).toDateString()}
            </Text>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e1e1e1",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#141434",
  },
  content: {
    fontSize: 16,
    color: "#141434",
  },
  id: {
    fontSize: 13,
    color: "#141434",
  },
  time: {
    fontSize: 13,
    color: "#838393",
  },
});
