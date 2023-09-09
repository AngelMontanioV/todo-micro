import PropTypes from 'prop-types';
import tw, { styled } from "twin.macro";
//Componentes
import CheckBox from './CheckBox';

const StyledTextTodoContainer = styled.div(({ done }) => [
  tw`ml-2 flex-shrink-0`,
  done && tw`text-gray-300 line-through`,
])




const ItemTodo = ({ todoObject, dispatch }) => {
  const { todo, id, done } = todoObject
  // const [isFavorite, setIsFavorite] = useState(false);
  // const handleStartFavorite = (e) => {
  //   setIsFavorite(e.target.checked)
  // }

  const handleDoneTask = (id) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: { id } })
  }

  const handleDeleteTask = (id) =>{
    dispatch({ type: "DELETE_TODO", payload: { id } })
  }


  return (
    <div className="bg-primary mt-2 h-11 rounded-md text-white flex items-center pl-2 pr-3 opacity-80 cursor-pointer">
      <CheckBox
        checked={done}
        onClick={() => handleDoneTask(id)}
      />
      <StyledTextTodoContainer done={done}>{todo}</StyledTextTodoContainer>
      <div className='ml-auto'>
        <label className="inline-flex items-center cursor-pointer ">
          {/* <input type="checkbox" className="hidden" onChange={(e) => handleStartFavorite(e)} /> */}
          {/* todo: se comenta la opcion de favorito para añadir boton de borrado */}
          {/* <span className="w-5 h-5 flex items-center justify-center transition-all relative">
            {isFavorite ?
              <i className="fa-solid fa-star"></i> :
              <i className="fa-regular fa-star"></i>
            }
          </span> */}
          <span 
            className="w-5 h-5 flex items-center justify-center transition-all relative"
            onClick={()=>handleDeleteTask(id)}  
          >
            <i className="fa-solid fa-x text-white hover:text-red-500 transition-all relative"></i>
          </span>


        </label>
      </div>
    </div>
  );
};

export { ItemTodo };


ItemTodo.propTypes = {
  todoObject: PropTypes.object,
  dispatch: PropTypes.func
}
