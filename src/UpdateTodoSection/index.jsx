import tw, { css, styled } from "twin.macro";

const StylesUpdateTodoContainer = styled.div(()=>[
  css`width:448px;`,
  tw`bg-primary h-full pl-3 pt-10 pr-0`
])

const UpdateTodoSection = () => {
  return (
    <StylesUpdateTodoContainer>
      <div className="text-white bg-slate-700 w-full">
        Un nuevo todo
      </div>
    </StylesUpdateTodoContainer>
  );
};

export default UpdateTodoSection;