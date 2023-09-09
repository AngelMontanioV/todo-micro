import { createContext } from "react";

export const initialState = [
  {
    id: 1,
    todo: "Este es un TODO",
    done: false,
    isImportant: false,
    dataCreated: "01-07-2012"
  },
  {
    id: 2,
    todo: "Este es un TODO 2 ",
    done: true,
    isImportant: false,
    dataCreated: "01-07-2012"
  },
  {
    id: 3,
    todo: "Este es un TODO 3",
    done: false,
    isImportant: false,
    dataCreated: "01-07-2012"
  },
]



export const TodosContext = createContext(initialState)