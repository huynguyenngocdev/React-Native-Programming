import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
} from "react-native";
import Line from "./Components/Line";
import Content from "./Components/Content";

const width = Dimensions.get("window").width;

const data = [
  {
    id: 1,
    type: "warning",
    icon: "info-circle",
    image: require("../assets/storm.jpg"),
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla. Mattis pellentesque id nibh tortor id aliquet. Maecenas sed enim ut sem viverra aliquet eget. Massa placerat duis ultricies lacus sed turpis tincidunt id. Mattis molestie a iaculis at erat. Arcu felis bibendum ut tristique et egestas quis ipsum. Neque vitae tempus quam pellentesque nec. Odio ut enim blandit volutpat maecenas. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. At risus viverra adipiscing at. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Auctor eu augue ut lectus arcu bibendum at varius. Aliquet lectus proin nibh nisl condimentum id venenatis a. Neque sodales ut etiam sit amet nisl purus in mollis. Tempus egestas sed sed risus. Lacinia quis vel eros donec ac odio tempor.",
    createAt: "8:00am, 21 May 2020",
    code: "SPA-01",
  },
  {
    id: 2,
    type: "normal",
    icon: "poo-storm",
    image: require("../assets/cloudy.jpg"),
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla. Mattis pellentesque id nibh tortor id aliquet. Maecenas sed enim ut sem viverra aliquet eget. Massa placerat duis ultricies lacus sed turpis tincidunt id. Mattis molestie a iaculis at erat. Arcu felis bibendum ut tristique et egestas quis ipsum. Neque vitae tempus quam pellentesque nec. Odio ut enim blandit volutpat maecenas. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. At risus viverra adipiscing at. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Auctor eu augue ut lectus arcu bibendum at varius. Aliquet lectus proin nibh nisl condimentum id venenatis a. Neque sodales ut etiam sit amet nisl purus in mollis. Tempus egestas sed sed risus. Lacinia quis vel eros donec ac odio tempor.",
    createAt: "8:00am, 21 May 2020",
    code: "SPA-04",
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" animated={true} />
        <View style={styles.header}>
          <Text style={styles.innerHeader}>FlatList</Text>
        </View>

        <Line />

        <View style={styles.content}>
          <Text style={styles.innerHeader}>My Posts</Text>
          <FlatList
            data={data}
            renderItem={({ item, index, separators }) => (
              <Content
                key={index}
                data={item}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}
              />
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
    backgroundColor: "#fff",
    alignItems: "center",
    width: width,
  },
  header: {
    width: width,
    alignItems: "center",
  },
  innerHeader: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default App;
