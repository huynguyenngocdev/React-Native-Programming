import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  value: {
    color: "#2e2e2e",
    fontSize: 50,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  logText: {
    color: "#707070",
    fontSize: 25,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated={true} hidden={true} />
        <SafeAreaView>
          <Text style={styles.logText}>
            {`${
              this.state.previousValue != null ? this.state.previousValue : ""
            } ${this.state.operator != null ? this.state.operator : ""} ${
              this.state.currentValue
            }`}
          </Text>

          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="±"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="/"
              theme="secondary"
              onPress={() => this.handleTap("operator", "/")}
            />
            <Button
              text="X"
              theme="secondary"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="-"
              theme="secondary"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="+"
              theme="secondary"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <View>
              <Row>
                <Button text="1" onPress={() => this.handleTap("number", 1)} />
                <Button text="2" onPress={() => this.handleTap("number", 2)} />
                <Button text="3" onPress={() => this.handleTap("number", 3)} />
              </Row>
              <Row>
                <Button
                  text="%"
                  theme="secondary"
                  onPress={() => this.handleTap("percentage")}
                />
                <Button text="0" onPress={() => this.handleTap("number", 0)} />
                <Button
                  text="."
                  theme="secondary"
                  onPress={() => this.handleTap("number", ".")}
                />
              </Row>
            </View>

            <Button
              text="="
              theme="double"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
