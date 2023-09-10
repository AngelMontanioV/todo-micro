// Dependencias y hooks
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useReducer } from "react";
import { todosReducer } from "./context/TodoReducer";
import { useStorageInitValue } from "./hooks/useStorageInitValue";

// Componentes
import Header from "./Header";
import { InputNewTodo } from "./ContainerTodos/InputNewTodo";
import ContainerTodos from "./ContainerTodos";

// Estilos
import { StylesPrincipalScreen, StylesLayout } from "./AppStyles";

function App() {
  const themeDefault = {
    image: "https://images-todo-microsoft.s3.us-east-1.amazonaws.com/pexels-c%C3%A1tia-matos-1072179.jpg",
    textColor: "text-white",
    miniature: ""
  }
  const todosFromStorage = useStorageInitValue("TODOS_v2", [])
  const themeFromStorage = useStorageInitValue("THEME_v1", themeDefault)

  
  const [actualTheme, setActualTheme] = useState(themeFromStorage)
  const [todos, dispatch] = useReducer(todosReducer, todosFromStorage)

  const {image, textColor} = actualTheme

  useEffect(()=>{
    localStorage.setItem("TODOS_v2", JSON.stringify(todos))
  },[todos])

  useEffect(()=>{
    localStorage.setItem("THEME_v1", JSON.stringify(actualTheme))
  },[actualTheme])

  return (
    <StylesLayout>
      <StylesPrincipalScreen image={image} >
        <Header setActualTheme={setActualTheme} textcolor={textColor}/>
        <ContainerTodos todos={todos} dispatch={dispatch}/>
        <InputNewTodo dispatch={dispatch}/>
      </StylesPrincipalScreen>
    </StylesLayout>
  )
}

export default App

StylesPrincipalScreen.propTypes = {
  image: PropTypes.string,
};
