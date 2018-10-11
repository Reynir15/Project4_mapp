import { createStore } from "redux";

const initialState = {
  title: "Enter your title",
  // id: 123,
  textArr: []
  // finished: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.payload.title };
    case "ADD_TITLE_TO_ARRAY":
      return { ...state, textArr: state.textArr.concat(action.payload.title) };
    default:
      return state;
  }
};

export default (store = createStore(reducer, initialState));
