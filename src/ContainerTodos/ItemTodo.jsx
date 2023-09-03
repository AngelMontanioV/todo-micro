import PropTypes from 'prop-types';
import { useState } from "react";

//Componentes
import CheckBox from './CheckBox';

const ItemTodo = ({ todoObject }) => {
  console.log(todoObject)
  const { todo, id, checked } = todoObject
  const [isFavorite, setIsFavorite] = useState(false);


  const handleStartFavorite = (e) => {
    setIsFavorite(e.target.checked)
  }

  return (
    <div className="bg-primary mt-2 h-11 rounded-md text-white flex items-center pl-2 pr-3">
      <CheckBox
        checked = {checked}
        onClick = {()=> console.log(id)}
      />
      <div className='ml-2 flex-shrink-0'>{todo}</div>
      <div className='ml-auto'>
        <label className="inline-flex items-center cursor-pointer ">
          <input type="checkbox" className="hidden" onChange={(e) => handleStartFavorite(e)} />
          <span className="w-5 h-5 flex items-center justify-center transition-all relative">
            {isFavorite ?
              <i className="fa-solid fa-star"></i> :
              <i className="fa-regular fa-star"></i>
            }


          </span>


        </label>
      </div>
    </div>
  );
};

export {ItemTodo};


ItemTodo.propTypes = {
  todoObject: PropTypes.object,
}
