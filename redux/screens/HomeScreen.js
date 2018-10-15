import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { WebBrowser } from "expo";
import InputForm from "../components/InputForm";

import { MonoText } from "../components/StyledText";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      id: 0
    };
  }

  onPress = text => {
    this.props.dispatch({
      type: "ADD_TITLE_TO_ARRAY",
      payload: {
        title: text,
        id: (this.state.id += 1),
        text: ""
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <InputForm onPress={text => this.onPress(text)} />
        <FlatList
          data={this.props.textArr}
          renderItem={({ item }) => <MonoText>{item.title}</MonoText>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  }
});

const mapStateToProps = state => {
  return { textArr: state.textArr };
};

export default connect(mapStateToProps)(HomeScreen);
