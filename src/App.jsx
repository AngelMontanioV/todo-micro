import { useState } from "react";
import Header from "./Header";
import Aside from "./Aside/Aside";
import ContainerTodos from "./ContainerTodos";
import tw, { css, styled } from "twin.macro";
import PropTypes from 'prop-types';

const StylesPrincipalScreen = styled.div(({ image }) => [
  tw`bg-backCcontainer`,
  image && css`background-image: url(${image});`,
  tw`text-black bg-cover bg-center w-full p-10`
])

const StylesLayout = styled.div(() => [
  tw`w-screen h-screen p-3 bg-primary flex`
])

function App() {
  const [actualTheme, setActualTheme] = useState({
    image: "",
    textColor: "text-white",
    miniature: ""
  })

  const {image, textColor} = actualTheme

  return (
    <StylesLayout>
      <Aside />
      <StylesPrincipalScreen image={image} >
        <Header setActualTheme={setActualTheme} textColor={textColor}/>
        <ContainerTodos />
      </StylesPrincipalScreen>
    </StylesLayout>
  )
}

export default App

StylesPrincipalScreen.propTypes = {
  image: PropTypes.string.isRequired,
};
