import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import InputForm from "../components/InputForm";
import { CheckBox } from "react-native-elements";
import Swipeable from "react-native-swipeable";
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
        finished: false
      }
    });
  };

  deleteItem = todoID => {
    this.props.dispatch({
      type: "DELETE",
      payload: {
        id: todoID
      }
    });
  };

  toggleTodo = id => {
    this.props.dispatch({
      type: "TOGGLE",
      payload: {
        id: id
      }
    });
    // this.setState({ finished: this.props.todos.finished });
  };

  render() {
    return (
      <View style={styles.container}>
        <InputForm onPress={text => this.onPress(text)} />
        <FlatList
          style={styles.flatlist}
          data={this.props.todos}
          renderItem={({ item, index }) => (
            // <Swipeable
            //   rightButtons={[
            <TouchableOpacity onPress={() => this.deleteItem(item.id)}>
              <MonoText>{item.title}</MonoText>
            </TouchableOpacity>
            // ]}
            // >
            //   <CheckBox
            //     title={item.title}
            //     checked={item.finished}
            //     onPress={() => this.toggleTodo(item.id)}
            //     // onPress={() => console.log(item.finished)}
            //   />
            // </Swipeable>
            //{" "}
            // {/* <Switch
            // //   onValueChange={() => this.toggleTodo(item.id)}
            // //   value={item.finished}
            // // /> */}
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start"
  },

  flatlist: {
    marginLeft: 20
  },

  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  }
});

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(HomeScreen);
