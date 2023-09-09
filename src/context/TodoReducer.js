import { initialState } from "./TodoContext";

export function todosReducer(state = initialState, action) {
  switch (action.type) {

    case "CREATE_TODO": {
      const newTodoObject = {
        id: `id_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        todo: action.payload.newTodo,
        done: false,
        isImportant: false,
        dataCreated: "01-07-2012"
      }
      return [
        newTodoObject, ...state
      ]
    }

    case "TOGGLE_COMPLETE": {
      const { id } = action.payload;
      return state.map(todo => todo.id == id ? { ...todo, done: !todo.done } : todo)
    }

    case "DELETE_TODO": {
      const { id } = action.payload;
      return state.filter((todo) => todo.id !== id);
    }

    case "UPDATE_TODO": {
      const { id, updatedTodo } = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      );
    }

    default:
      return state;
  }
}