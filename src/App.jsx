import { useState } from "react";
import Header from "./Header";
import { useReducer } from "react";
import { initialState } from "./context/TodoContext";
import { todosReducer } from "./context/TodoReducer";
// import Aside from "./Aside/Aside";
import { InputNewTodo } from "./ContainerTodos/InputNewTodo";
import ContainerTodos from "./ContainerTodos";
import tw, { css, styled } from "twin.macro";
import PropTypes from 'prop-types';
// import UpdateTodoSection from "./UpdateTodoSection";

const StylesPrincipalScreen = styled.div(({ image }) => [
  tw`bg-backCcontainer`,
  image && css`background-image: url(${image});`,
  tw`text-black bg-cover bg-center w-full p-10 w-full flex flex-col`
])

const StylesLayout = styled.div(() => [
  tw`w-screen h-screen p-3 bg-primary flex`
])

function App() {
  const [actualTheme, setActualTheme] = useState({
    image: "https://images-todo-microsoft.s3.us-east-1.amazonaws.com/pexels-c%C3%A1tia-matos-1072179.jpg",
    textColor: "text-white",
    miniature: ""
  })

  const [todos, dispatch] = useReducer(todosReducer, initialState)

  const {image, textColor} = actualTheme

  return (
    <StylesLayout>
      {/* <Aside /> */}
      <StylesPrincipalScreen image={image} >
        <Header setActualTheme={setActualTheme} textcolor={textColor}/>
        <ContainerTodos todos={todos} dispatch={dispatch}/>
        <InputNewTodo dispatch={dispatch}/>
      </StylesPrincipalScreen>
      {/* <UpdateTodoSection/> */}
    </StylesLayout>
  )
}

export default App

StylesPrincipalScreen.propTypes = {
  image: PropTypes.string.isRequired,
};
