import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Dimensions,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default ({ modalVisible, setModalVisible, addNote }) => {
  const [note, setNote] = React.useState("");
  const [contentNote, setContentNote] = React.useState("");
  const [deadline, setDeadline] = React.useState(new Date());

  const [showTimePicker, setShowTimePicker] = React.useState(false);

  const [logError, setLogError] = React.useState("");

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
  });

  const resetInput = () => {
    setNote("");
    setContentNote("");
    setDeadline(new Date());
  };

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalHeader}>Add a new note</Text>

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
              style={styles.inputStyle}
              placeholder="Description..."
              keyboardType="default"
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

          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => {
                addNote({
                  note: note,
                  content_note: contentNote,
                  deadline: deadline,
                  status: false,
                });
                resetInput();
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Add</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={[styles.button, styles.buttonCancel]}
              onPress={() => {
                resetInput();
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  buttonCancel: { backgroundColor: "#cb0000" },
  buttonOpenPicker: { backgroundColor: "#838393" },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalHeader: {
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
    width: Dimensions.get("screen").width / 1.5,
  },
  inputTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("screen").width / 1.5,
  },
  textError: {
    color: "#cb0000",
    fontSize: 13,
  },
});
