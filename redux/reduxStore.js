import { createStore } from "redux";

const initialState = {
  title: "Enter your title",
  id: 123,

  textArr: []
  // finished: false
};

const reducer = (state = initialState, action) => {
  console.log(state.textArr);
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.payload.title };
    case "ADD_TITLE_TO_ARRAY":
      return {
        // textArr: [...state.textArr, action.payload]
        textArr: [
          ...state.textArr,
          { title: action.payload.title, id: action.payload.id }
        ]
      };

    default:
      return state;
  }
};

export default (store = createStore(reducer, initialState));
