import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  ImageBackground,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Line from "./Line";

const height = Dimensions.get("window").height / 4;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  imageBorder: { borderRadius: 10 },
  image: {
    height: height,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  content: {
    fontSize: 15,
  },
  iconPosition: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconButton: {
    textAlign: "center",
    backgroundColor: "rgba(255,255,255, 0.8)",
    margin: 10,
    width: 40,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    color: "#8073c7",
    margin: 10,
    fontSize: 18,
  },
  colorIconWarning: {
    color: "red",
  },
  infoPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  showTime: {
    flexDirection: "row",
  },
  iconClock: {
    alignSelf: "center",
    fontSize: 14,
    color: "#b0b0b0",
  },
  time: {
    alignSelf: "center",
    fontSize: 12,
    color: "#b0b0b0",
  },
  code: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
  },
});

export default ({ data }) => {
  const icons = [styles.icon];
  if (data.type === "warning") {
    icons.push(styles.colorIconWarning);
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageCover}>
        <ImageBackground
          source={data.image}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.imageBorder}
        >
          <View style={styles.iconPosition}>
            <Text style={styles.iconButton}>
              <FontAwesome name={data.icon} style={icons} />
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.content} numberOfLines={2}>
          {data.content}
        </Text>
      </View>
      <View style={styles.infoPost}>
        <View style={styles.showTime}>
          <FontAwesome name="clock" style={styles.iconClock} />
          <Text style={styles.time}>{data.createAt}</Text>
        </View>

        <Text style={styles.code} numberOfLines={2}>
          {data.code}
        </Text>
      </View>
      <Line />
    </View>
  );
};
