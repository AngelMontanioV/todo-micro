import tw, { css, styled } from "twin.macro";

export const StylesPrincipalScreen = styled.div(({ image }) => [
  tw`bg-backCcontainer`,
  image && css`background-image: url(${image});`,
  tw`text-black bg-cover bg-center w-full p-10 w-full flex flex-col`
])

export const StylesLayout = styled.div(() => [
  tw`w-screen h-screen p-3 bg-primary flex`
])