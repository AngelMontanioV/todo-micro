import PropTypes from 'prop-types';
const ItemThemeOption = ({ image }) => {
  console.log(image)
  return (
    <div className={`w-14 h-14 border-2 border-transparent hover:border-white `}>
      <img src={image} alt="" className='imagen w-full h-full object-fit' />
    </div>
  );
};

export default ItemThemeOption;

ItemThemeOption.propTypes = {
  bg: PropTypes.string
}