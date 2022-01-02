import React from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";
import { Drawer } from "react-native-paper";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../context";

export default (props) => {
  const { signOut } = React.useContext(AuthContext);
  const [isActive, setIsActive] = React.useState(0);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.drawerHeader}>
            <Image
              style={styles.logo}
              source={require("../../assets/icon.png")}
            />
          </View>
          <Drawer.Section style={styles.drawerSection}>
            {props.data.map((e, i) => {
              return (
                <View key={i} style={{ flexDirection: "row" }}>
                  {isActive === i && <View style={styles.redLine} />}
                  <DrawerItem
                    icon={({ color, size }) => (
                      <Icon name={e.icon} color={color} size={size} />
                    )}
                    focused={isActive === i && true}
                    label={e.label}
                    labelStyle={
                      isActive === i ? styles.activeTitle : styles.title
                    }
                    activeTintColor="#D00C04"
                    //activeBackgroundColor="rgba(177,238, 255, 0.8)"
                    activeBackgroundColor="transparent"
                    onPress={() => {
                      setIsActive(i);
                      props.navigation.navigate(e.name);
                    }}
                    style={styles.drawerItems}
                  />
                </View>
              );
            })}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <Icon name="exit-to-app" color="#fff" size={30} />}
          label={() => (
            <Text style={{ color: "#fff", fontSize: 16 }}>Logout</Text>
          )}
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: Math.round(Dimensions.get("screen").width / 2),
    height: Math.round(Dimensions.get("screen").height / 8),
  },
  drawerItems: {
    width: Math.round(Dimensions.get("screen").width),
  },
  title: {
    fontSize: 16,
    color: "#414151",
  },
  activeTitle: {
    color: "#141434",
    fontWeight: "bold",
    fontSize: 16,
  },
  redLine: {
    width: 2,
    borderColor: "#D00C04",
    borderLeftWidth: 5,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 0,
    backgroundColor: "#D00C04",
  },
});
