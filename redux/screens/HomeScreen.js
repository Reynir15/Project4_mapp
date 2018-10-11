import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from "react-native";
import { connect } from "react-redux";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MonoText style={styles.codeHighlightText}>{this.props.title}</MonoText>
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
  return { title: state.title };
};

export default connect(mapStateToProps)(HomeScreen);
