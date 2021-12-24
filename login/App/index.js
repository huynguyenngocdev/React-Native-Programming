import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Button from "./Components/Button";
import LineWithText from "./Components/LineWithText";

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.accionaLogin}>
          <View style={styles.showLogo}>
            <Image
              style={styles.logoSize}
              source={require("../assets/logo.png")}
            />
          </View>

          <Text style={styles.textNote}>
            Acciona Account Users (eg.@acciona, @colemanrail etc.) &gt; Sign in
            with your corporate ID
          </Text>

          <Button text="Acciona Coporate Login" theme="red" />
        </View>

        <LineWithText text="OR" />

        <Text style={styles.textNote}>
          All Other Users &gt; Use the login form below
        </Text>

        <View style={{ marginBottom: 10 }} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="name@host.com"
            keyboardType="email-address"
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.inputStyle}
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="default"
          />
        </KeyboardAvoidingView>

        <View style={styles.leftText}>
          <Text>Forgot your password?</Text>
        </View>

        <Button theme="blue" text="Login" />

        <View style={styles.centerText}>
          <Text style={styles.textNote}>
            Forgot your password or having trouble signing in?
          </Text>
          <Text style={styles.textNote}>
            Contact the Service Desk on:{" "}
            <Text style={styles.textNoteRed}>(03) 9624 4236</Text>
          </Text>
          <Text style={styles.textNote}>
            Raise an incident via{" "}
            <Text style={styles.textNoteRed}>Service Now Portal</Text>
          </Text>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 15,
  },
  accionaLogin: {
    margin: 0,
    padding: 0,
  },
  textNote: {
    fontSize: Dimensions.get("screen").width / 28,
    paddingVertical: 2,
  },
  showLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoSize: {
    margin: 5,
    height: 110,
    width: 110,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#999999",
    padding: 10,
    marginVertical: 10,
  },
  leftText: {
    alignItems: "flex-end",
  },
  centerText: {
    alignItems: "center",
    justifyContent: "center",
  },
  textNoteRed: { color: "red", fontWeight: "700" },
});

export default App;
