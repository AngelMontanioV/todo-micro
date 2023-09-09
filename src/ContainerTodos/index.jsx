import { useState } from "react";
import { ItemTodo } from "./ItemTodo"
import PropTypes from 'prop-types';


import tw, { styled } from "twin.macro";

const StylesTodosContainer = styled.div`
  ${tw`overflow-y-auto rounded-md scrollbar-none  max-h-[calc(100%-90px)] grow`}
`;



const ContainerTodos = ({ todos, dispatch }) => {


  const [todosCompletedVisible, setTodosCompletedVisible] = useState(false)

  return (
    <StylesTodosContainer
    >
      {
        todos.map((todo, key) => {
          if (!todo.done) {
            return <ItemTodo todoObject={todo} key={key} dispatch={dispatch} />
          }
        })
      }
      <div
        onClick={() => setTodosCompletedVisible(prev => !prev)}
        className="flex items-center justify-between opacity-80 text-white w-32 rounded-md mt-3 pl-2 pr-2 h-8 bg-primary cursor-pointer">Completado
        {!todosCompletedVisible ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}

      </div>
      {
        todosCompletedVisible && todos.map((todo, key) => {
          if (todo.done) {
            return <ItemTodo todoObject={todo} key={key} dispatch={dispatch} />
          }
        })
      }
    </StylesTodosContainer>



  );
};

export default ContainerTodos;

ContainerTodos.propTypes = {
  todos: PropTypes.array,
  dispatch: PropTypes.func
}
