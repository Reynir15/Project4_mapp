import React, { Component } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleSubmit = () => {
    this.props.onPress(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder={"Add a TODO..."}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          style={styles.button}
          title="Add"
          onPress={this.handleSubmit}
          disabled={this.state.text.trim() === ""}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
    marginBottom: 10
  },
  TextInput: {
    flex: 1,
    height: 40,
    borderColor: "grey",
    marginRight: 10
  },
  button: {
    flex: 2
  }
});
