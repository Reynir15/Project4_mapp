import React from "react";
import { connect } from "react-redux";
import { TextInput, Button, View, StyleSheet } from "react-native";

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

    return <View />;
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
