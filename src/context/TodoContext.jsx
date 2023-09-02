import { createContext } from "react";

const initialState = {
  todos: []
}


export const TodosContext = createContext(initialState)