import { createStore } from "redux";

const initialState = {
  todos: [],
  title: "Enter your title",
  id: 123,
  finished: false
};

const reducer = (state = initialState, action) => {
  console.log(state.todos);
  switch (action.type) {
    case "UPDATE_TITLE":
      return { ...state, title: action.payload.title };
    case "ADD_TITLE_TO_ARRAY":
      return {
        todos: [
          ...state.todos,
          {
            title: action.payload.title,
            id: action.payload.id,
            finished: action.payload.finished
          }
        ]
      };
    case "DELETE":
      return {
        todos: [...state.todos.filter(item => item.id != action.payload.id)]
      };

    case "TOOGLE":
      return {
        ...state.todos,
        todos: state.todos.map(item => {
          if (item.id === action.payload.id) {
            item.finished = !item.finished;
            // item.finished = !action.payload.finished;
          }
        })
      };

    default:
      return state;
  }
};

export default (store = createStore(reducer, initialState));
