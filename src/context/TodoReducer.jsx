import { useReducer } from "react";

function todosReducer(state, action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return {
        ...state,
        todos: action.payload
      }

    case "CREATE_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    default:
      break;
  }
}