import PropTypes from 'prop-types';
import { useState } from "react";
const CheckBox = ({
  checked = false,
  onClick = ()=>{}
}) => {

  const [isHoverCheckBox, setIsHoverCheckBox] = useState(false)
  const [finishTodo, setFinishTodo] = useState(checked);

  const handleCheckboxChange = (event) => {
    setFinishTodo(event.target.checked);
    onClick()
  };

  const onHoverChecked = (event) => {
    setIsHoverCheckBox(event.type === "mouseenter" ? true : false)
  }

  return (
    <label
      className="inline-flex items-center cursor-pointer flex-shrink-0"
      onMouseEnter={onHoverChecked}
      onMouseLeave={onHoverChecked}
    >
      <input type="checkbox" className="hidden" onChange={(e) => handleCheckboxChange(e)} />
      <span
        className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all relative">
        {isHoverCheckBox && <span className="w-3 h-3 rounded-full bg-gray-500 absolute"></span>}
        {finishTodo && <span className="w-3 h-3 rounded-full bg-gray-300 absolute"></span>}
      </span>
    </label>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  checked : PropTypes.bool,
  onClick : PropTypes.func
}
