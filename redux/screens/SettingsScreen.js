import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      id: 0
    };
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          // placeholder={"Add a TODO..."}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="Add the task to the list"
          onPress={() =>
            this.props.dispatch({
              type: "ADD_TITLE_TO_ARRAY",
              payload: {
                title: this.state.text,
                id: (this.state.id += 1),
                text: ""
              }
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  TextInput: {
    borderWidth: 1,
    height: 40,
    borderColor: "grey"
  }
});

export default connect()(SettingsScreen);
