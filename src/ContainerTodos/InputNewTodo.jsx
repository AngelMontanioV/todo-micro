import { useRef } from "react";
import CheckBox from "./CheckBox";
import tw, { styled } from "twin.macro";
import PropTypes from 'prop-types';

const StyledInputContainer = styled.div`${tw`bg-primary mt-2 h-12 rounded-md text-white flex items-center pl-2 pr-3  opacity-80 w-full self-end`}`
const StyledInputTodo = styled.input`${tw`ml-2 h-12 flex-shrink-0 bg-primary w-11/12 border-slate-200 border-0 focus:outline-none`}`

const InputNewTodo = ({ dispatch }) => {
  
  const textNewTodo = useRef("")

  const addNewTodo = ()=>{
    if(textNewTodo.current.value === "") return;
    dispatch({type: "CREATE_TODO", payload: {newTodo: textNewTodo.current.value}})
    textNewTodo.current.value = ""
  }


  return (
    <StyledInputContainer>
      <CheckBox
        checked={false}
        onClick={addNewTodo}
      />
      <StyledInputTodo
        ref={textNewTodo}
        onKeyDown={(e) => {
          if(e.key == "Enter"){
            addNewTodo()
          }
        } }
      />
    </StyledInputContainer>
  );
};

export { InputNewTodo };

InputNewTodo.propTypes = {
  dispatch : PropTypes.func
}