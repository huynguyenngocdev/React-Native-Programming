import React, { useState } from "react";

import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
  Animated,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Button from "./Button";

const height = Dimensions.get("window").height / 4;

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#E8E8EB",
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#E8E8EB",
  },
  time: {
    color: "#141434",
    fontSize: 14,
    fontWeight: "bold",
  },
  timeFrame: {
    color: "#414151",
    fontSize: 12,
  },
  icon: {
    color: "#838393",
    fontSize: 25,
  },
  iconIsSelected: {
    color: "#141434",
  },
  content: { padding: 8 },
  title: {
    color: "#838393",
    fontSize: 12,
    marginVertical: 5,
  },
  jobName: {
    color: "#141434",
    fontSize: 12,
    fontWeight: "bold",
  },
  generalText: {
    color: "#141434",
    fontSize: 12,
    fontWeight: "500",
  },
  actions: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
  },
});

const Line = () => (
  <View>
    <View style={styles.line} />
  </View>
);

export default ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [iconStyles, setIconStyles] = useState([styles.icon]);

  _start = () => {
    LayoutAnimation.spring();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.time}>{data.time}</Text>
          <Text style={styles.timeFrame}>{data.timeFrame}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setOpen(!isOpen);
            if (rotate === 180) {
              setRotate(0);
              setIconStyles([styles.icon]);
            } else {
              setRotate(180);
              setIconStyles([...iconStyles, styles.iconIsSelected]);
            }
            //  ?  :
            _start();
          }}
        >
          <Animated.View
            style={{
              transform: [
                { rotateX: `${rotate}deg` },
                { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
              ],
            }}
          >
            <FontAwesome name="caret-up" style={iconStyles} />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <Line />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Job Name:</Text>
          <Text style={styles.jobName}>{data.job}</Text>
        </View>
        {isOpen ? (
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={styles.title}>Leave Type</Text>
                <Text style={styles.generalText}>N/A</Text>
              </View>
              <View>
                <Text style={styles.title}>Time Allowance:</Text>
                <Text style={styles.generalText}>N/A</Text>
              </View>
              <View>
                <Text style={styles.title}>LAHA:</Text>
                <Text style={styles.generalText}>N/A</Text>
              </View>
              <View></View>
            </View>

            <View>
              <Text style={styles.title}>Description:</Text>
              <Text style={styles.generalText}>{data.description}</Text>
            </View>

            <View>
              <Text style={styles.title}>Payroll Notes:</Text>
              <Text style={styles.generalText}>{data.payroll}</Text>
            </View>

            <View style={styles.actions}>
              <Button theme="red" text="Edit" />
              <Button theme="normal" text="Delete" />
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};
