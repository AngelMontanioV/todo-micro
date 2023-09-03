import PropTypes from 'prop-types';
import tw, { styled } from "twin.macro";

const StylesItemOptions = styled.div(()=>[
  tw`w-14 h-14 border-2 border-transparent hover:border-white`
])

const ItemThemeOption = ({ image }) => {
  console.log(image)
  return (
    <StylesItemOptions>
      <img src={image} alt="" className='imagen w-full h-full object-fit' />
    </StylesItemOptions>
  );
};

export default ItemThemeOption;

ItemThemeOption.propTypes = {
  image: PropTypes.string
}