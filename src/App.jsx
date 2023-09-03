import Header from "./Header";
import Aside from "./Aside/Aside";
import ContainerTodos from "./ContainerTodos";
import tw, { css, styled } from "twin.macro";
import PropTypes from 'prop-types';

const StylesPrincipalScreen = styled.div(({ image }) => [
  css`background-image: url(${image});`,
  tw`text-black bg-cover bg-center w-full p-10`
])

const StylesLayout = styled.div(()=>[
  tw`w-screen h-screen p-3 bg-primary flex`
])



function App() {

  return (
    <StylesLayout>
      <Aside />
      <StylesPrincipalScreen image={"https://images-todo-microsoft.s3.amazonaws.com/montania.niebla.jpg"} >
        <Header />
        <ContainerTodos />
      </StylesPrincipalScreen>
    </StylesLayout>
  )
}

export default App

StylesPrincipalScreen.propTypes = {
  image: PropTypes.string.isRequired,
};
