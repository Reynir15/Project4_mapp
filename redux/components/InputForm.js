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
      <View>
        <TextInput
          style={styles.TextInput}
          // placeholder={"Add a TODO..."}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button title="Add the task to the list" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    height: 40,
    borderColor: "grey"
  }
});
