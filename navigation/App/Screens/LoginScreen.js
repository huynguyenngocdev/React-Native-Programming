import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { AuthContext } from "../context";
import Button from "../Components/Button";
import LineWithText from "../Components/LineWithText";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import data from "../Data/data";

export default () => {
  const { signIn } = React.useContext(AuthContext);
  const listUser = React.useRef(data.account);
  const login = () => {
    let acc = listUser.current.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (acc && acc.password === password) {
      setErrorEmail(false);
      setErrorPassword(false);
      let user = {
        name: acc.name,
        email: acc.email,
        employed: acc.employed,
      };
      signIn(user);
    } else {
      setErrorEmail(true);
      setErrorPassword(true);
    }
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isErrorEmail, setErrorEmail] = React.useState(false);
  const [isErrorPassword, setErrorPassword] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.accionaLogin}>
        <View style={styles.showLogo}>
          <Image
            style={styles.logoSize}
            source={require("../../assets/logo.png")}
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
      <KeyboardAwareScrollView>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="name@host.com"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {isErrorEmail && <Text style={styles.error}>Email is invalid.</Text>}

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.inputStyle}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {isErrorPassword && (
          <Text style={styles.error}>Password is invalid.</Text>
        )}
      </KeyboardAwareScrollView>
      <View style={styles.leftText}>
        <Text>Forgot your password?</Text>
      </View>

      <Button theme="blue" text="Login" onPress={() => login()} />

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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
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
  error: {
    color: "red",
    fontSize: 12,
  },
});
