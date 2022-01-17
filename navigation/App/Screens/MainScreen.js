import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProfileScreen from "./MyProfileScreen";
import HomeTab from "./InnerMainScreen/HomeTab";
import PlanTab from "./InnerMainScreen/PlanTab";
import SiteEventTab from "./InnerMainScreen/SiteEventTab";
import LinkTab from "./InnerMainScreen/LinkTab";
import ContactTab from "./InnerMainScreen/ContactTab";
import DrawerContent from "../Components/DrawerContent";
import NoteScreen from "./NoteScreen/NoteScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const bottomTabs = [
  {
    name: "HomeTab",
    component: HomeTab,
    label: "Home",
    icon: "home-outline",
  },
  {
    name: "Plan",
    component: PlanTab,
    label: "Plan",
    icon: "tools",
  },
  {
    name: "SiteEvent",
    component: SiteEventTab,
    label: "Site Event",
    icon: "calendar-plus",
  },
  {
    name: "Link",
    component: LinkTab,
    label: "Link",
    icon: "link-variant",
  },
  {
    name: "Contact",
    component: ContactTab,
    label: "Contact",
    icon: "phone-outline",
  },
];

const TabsScreen = () => (
  <Tab.Navigator
    initialRouteName={bottomTabs && "SiteEvent"}
    activeColor="#ff1204"
    labelStyle={{ fontSize: 12, color: "#838393" }}
    barStyle={{ backgroundColor: "#fff" }}
  >
    {bottomTabs.map((tab, i) => (
      <Tab.Screen
        key={i}
        name={tab.name}
        component={tab.component}
        options={{
          title: (
            <Text style={{ color: "#000", fontWeight: "bold" }}>
              {tab.label}
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Icon name={tab.icon} color={color} size={25} />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

const drawerTabs = [
  {
    name: "Home",
    component: TabsScreen,
    label: "Home",
    icon: "home-outline",
  },
  {
    name: "Profile",
    component: ProfileScreen,
    label: "My Profile",
    icon: "account",
  },
  {
    name: "Notes",
    component: NoteScreen,
    label: "Notes",
    icon: "note-outline",
  },
  {
    name: "EmployedBenefits",
    component: HomeTab,
    label: "Employed Benefits",
    icon: "heart-outline",
  },
  {
    name: "MyRequisitions",
    component: HomeTab,
    label: "My Requisitions",
    icon: "cart-outline",
  },
  {
    name: "Link",
    component: LinkTab,
    label: "Link",
    icon: "link-variant",
  },
  {
    name: "Contact",
    component: ContactTab,
    label: "Contact Us",
    icon: "phone-outline",
  },
];

const RootDrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} data={drawerTabs} />}
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#141434",
        headerTitleAlign: "center",
      }}
    >
      {drawerTabs.map((e, i) => (
        <Drawer.Screen
          key={i}
          name={e.name}
          options={{ title: e.label }}
          component={e.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

const MainScreen = () => {
  return (
    <NavigationContainer>
      <RootDrawerScreen />
    </NavigationContainer>
  );
};

export default MainScreen;
