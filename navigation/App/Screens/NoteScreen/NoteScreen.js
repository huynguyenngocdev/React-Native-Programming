import React from "react";
import {
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CallAPI } from "../../API/CallAPI";
import NoteItem from "../../Components/Note/NoteItem";
import AddNotePopUp from "../../Components/Note/AddNotePopUp";
import DetailNoteScreen from "./DetailNoteScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Stack = createNativeStackNavigator();

export default ({ route, navigation }) => {
  const [notes, setNotes] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const rootNavigation = navigation;

  const addNoteButton = () => (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <Icon name="plus-box-outline" size={25} style={{ marginRight: 15 }} />
    </TouchableOpacity>
  );

  React.useEffect(async () => {
    rootNavigation.setOptions({
      headerRight: () => addNoteButton(),
    });
    await CallAPI("notes", "GET").then((res) =>
      setNotes(
        res.data
          .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
          .sort((a, b) => a.status - b.status)
      )
    );
    setRefreshing(false);
    return () => {
      setNotes([]);
    };
  }, [reload]);

  const addNote = async (newNote) => {
    await CallAPI("notes", "POST", newNote)
      .then(() => Alert.alert("OK", "Add a new note successfully!"))
      .catch(() => Alert.alert("Fail", "Add a new note failure!"));
    setReload(!reload);
  };

  const updateNote = async (id, newNote, goBack) => {
    await CallAPI(`notes/${id}`, "PUT", newNote)
      .then(() => Alert.alert("OK", "Update a note successfully!"))
      .catch(() => Alert.alert("Fail", "Update a note failure!"));
    () => goBack();
    setReload(!reload);
  };

  const deleteNote = (idNote, goBack) => {
    Alert.alert("Delete", "Do you want to delete this note?", [
      {
        text: "Yes",
        onPress: async () => {
          await CallAPI(`notes/${idNote}`, "DELETE")
            .then(() => Alert.alert("OK", "Delete the note successfully!"))
            .catch(() => Alert.alert("Fail", "Delete the note failure!"));
          goBack();
          setReload(!reload);
        },
        style: "default",
      },
      {
        text: "No",
        onPress: () => Alert.alert("Fail", "Delete the note failure!"),
        style: "cancel",
      },
    ]);
  };

  const ListNote = ({ route, navigation }) => (
    <FlatList
      refreshing={refreshing}
      onRefresh={() => {
        setReload(!reload);
      }}
      data={notes}
      renderItem={({ item, index }) => (
        <NoteItem
          key={index}
          route={route}
          navigation={navigation}
          data={item}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );

  const DetailNote = ({ route, navigation }) => (
    <DetailNoteScreen
      route={route}
      navigation={navigation}
      rootNavigation={rootNavigation}
      addNoteButton={() => addNoteButton()}
      updateNote={updateNote}
      deleteNote={deleteNote}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <AddNotePopUp
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addNote={addNote}
      />
      {notes.length > 0 ? (
        <Stack.Navigator
          initialRouteName="ListNote"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="ListNote" component={ListNote} />
          <Stack.Screen name="Details" component={DetailNote} />
        </Stack.Navigator>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#4285f4" />
        </View>
      )}
    </View>
  );
};
