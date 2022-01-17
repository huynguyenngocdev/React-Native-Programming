import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default ({
  route,
  navigation,
  rootNavigation,
  addNoteButton,
  updateNote,
  deleteNote,
}) => {
  const [note, setNote] = React.useState(route.params.data.note);
  const [contentNote, setContentNote] = React.useState(
    route.params.data.content_note
  );
  const [deadline, setDeadline] = React.useState(
    new Date(route.params.data.deadline)
  );
  const [status, setStatus] = React.useState(route.params.data.status);

  const [showTimePicker, setShowTimePicker] = React.useState(false);
  const [logError, setLogError] = React.useState("");

  const goBack = () => {
    rootNavigation.setOptions({
      headerRight: addNoteButton,
    });
    navigation.goBack();
  };

  React.useEffect(() => {
    rootNavigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => goBack()}>
          <Icon
            name="keyboard-backspace"
            size={25}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  React.useEffect(() => {
    let textError = "";
    if (note.length === 0 && contentNote.length === 0) {
      textError = "*Note and Content is empty";
    } else if (note.length === 0) {
      textError = "*Note is empty";
    } else if (contentNote.length === 0) {
      textError = "*Content is empty";
    } else {
      textError = "";
    }
    setLogError(textError);
  }, [note, contentNote]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Update note have ID = {route.params.data.id}
      </Text>
      <KeyboardAwareScrollView>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Note</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="To Do"
            keyboardType="default"
            value={note}
            onChangeText={(text) => setNote(text)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Description / Content</Text>
          <TextInput
            multiline={true}
            style={[styles.inputStyle]}
            placeholder="Description..."
            value={contentNote}
            onChangeText={(text) => setContentNote(text)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Deadline</Text>
          <View style={styles.inputTime}>
            <Text>{deadline.toDateString()}</Text>
            <TouchableHighlight
              style={[styles.button, styles.buttonOpenPicker]}
              onPress={() => setShowTimePicker(true)}
            >
              <Text style={styles.textStyle}>Pick</Text>
            </TouchableHighlight>
          </View>
          {showTimePicker && (
            <DateTimePicker
              minimumDate={new Date()}
              value={deadline}
              mode="date"
              is24Hour={true}
              display="calendar"
              onChange={(event, selectedDate) => {
                setShowTimePicker(Platform.OS === "ios");
                selectedDate && setDeadline(selectedDate);
              }}
            />
          )}
        </View>

        <Text style={styles.textError}>{logError}</Text>
        <Text style={styles.textError}>
          *To finish the update process, {"\n"} you need to press the Update
          button
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableHighlight
            style={[styles.button, styles.buttonConfirm]}
            onPress={() => {
              updateNote(
                route.params.data.id,
                {
                  note: note,
                  content_note: contentNote,
                  deadline: deadline,
                  status: status,
                },
                goBack()
              );
            }}
          >
            <Text style={styles.textStyle}>Update</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, styles.buttonDone]}
            onPress={() => setStatus(!status)}
          >
            <Text style={styles.textStyle}>
              {status ? "Not Yet" : "Mark as Done"}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, styles.buttonDelete]}
            onPress={async () => {
              await deleteNote(route.params.data.id, goBack);
            }}
          >
            <Text style={styles.textStyle}>Delete</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    borderRadius: 6,
    margin: 5,
    padding: 10,
    elevation: 2,
  },
  buttonConfirm: {
    backgroundColor: "#2196F3",
  },
  buttonDelete: { backgroundColor: "#cb0000" },
  buttonDone: { backgroundColor: "#34a853" },
  buttonOpenPicker: { backgroundColor: "#838393" },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
  },
  inputView: {
    margin: 5,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#838393",
    padding: 10,
    marginVertical: 10,
    width: Dimensions.get("screen").width - 30,
  },
  inputTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("screen").width - 30,
  },
  textError: {
    color: "#cb0000",
    fontSize: 13,
    textAlign: "center",
  },
});
