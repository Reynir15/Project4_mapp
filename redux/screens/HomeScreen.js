import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
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
        {this.props.textArr.map(todo => (
          <TouchableOpacity key={todo.id}>
            <Text>
              {todo.title} ID: {todo.id}
            </Text>
          </TouchableOpacity>
        ))}
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
