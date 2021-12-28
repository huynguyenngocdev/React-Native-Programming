import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Content from "./Components/Content";

const width = Dimensions.get("window").width;

const data = [
  {
    id: 1,
    time: "Thu 05 Nov (Total: 1h 40m)",
    timeFrame: "02:15pm to 04:10pm - 15pm lunch",
    job: "835-853 High St, Armadale OH - Overheads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla. Mattis pellentesque id nibh tortor id aliquet. Maecenas sed enim ut sem viverra aliquet eget. Massa placerat duis ultricies lacus sed turpis tincidunt id. Mattis molestie a iaculis at erat. Arcu felis bibendum ut tristique et egestas quis ipsum. Neque vitae tempus quam pellentesque nec. ",
    payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    id: 2,
    time: "Fri 06 Nov (Total: 2h 10m)",
    timeFrame: "02:30pm to 04:10pm - 15pm lunch",
    job: "835-853 High St, Armadale (11466) OH - Overheads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla. Mattis pellentesque id nibh tortor id aliquet. Maecenas sed enim ut sem viverra aliquet eget. Massa placerat duis ultricies lacus sed turpis tincidunt id. Mattis molestie a iaculis at erat. Arcu felis bibendum ut tristique et egestas quis ipsum. Neque vitae tempus quam pellentesque nec. Odio ut enim blandit volutpat maecenas. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. At risus viverra adipiscing at. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Auctor eu augue ut lectus arcu bibendum at varius. Aliquet lectus proin nibh nisl condimentum id venenatis a.",
    payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    id: 3,
    time: "Thu 05 Nov (Total: 1h40m)",
    timeFrame: "02:30pm to 04:10pm - 15pm lunch",
    job: "835-853 High St, Armadale (11466) OH - Overheads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla. Mattis pellentesque id nibh tortor id aliquet. Maecenas sed enim ut sem viverra aliquet eget. Massa placerat duis ultricies lacus sed turpis tincidunt id. Mattis molestie a iaculis at erat. Arcu felis bibendum ut tristique et egestas quis ipsum. Neque vitae tempus quam pellentesque nec. Odio ut enim blandit volutpat maecenas. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. At risus viverra adipiscing at. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Auctor eu augue ut lectus arcu bibendum at varius. Aliquet lectus proin nibh nisl condimentum id venenatis a. Neque sodales ut etiam sit amet nisl purus in mollis. Tempus egestas sed sed risus. Lacinia quis vel eros donec ac odio tempor.",
    payroll: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" animated={true} />
        <View style={styles.headerLesson}>
          <Text style={styles.innerHeaderLesson}>FlatList and ScrollView</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.listHeader}>
            <FontAwesome
              name="arrow-circle-left"
              style={styles.listHeaderIcon}
            />
            <View>
              <Text style={styles.listHeaderTime}>
                Mon 02 Nov - Sun 08 Nov 2020
              </Text>
              <Text style={styles.totalTime}>(3h 20m)</Text>
            </View>
            <FontAwesome
              name="arrow-circle-right"
              style={styles.listHeaderIcon}
            />
          </View>
          <FlatList
            data={data}
            renderItem={({ item, index, separators }) => (
              <Content key={index} data={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5fa",
    alignItems: "center",
    width: width,
  },
  headerLesson: {
    width: width,
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#b0b0b0",
    borderBottomWidth: 1,
  },
  innerHeaderLesson: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#141434",
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listHeaderIcon: {
    color: "red",
    fontSize: 18,
  },
  listHeaderTime: {
    color: "#141434",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  totalTime: { color: "gray", textAlign: "center", fontSize: 14 },
});

export default App;
