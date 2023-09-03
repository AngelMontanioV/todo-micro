import PropTypes from 'prop-types';
import tw, { styled, css } from "twin.macro";

const StylesItemOptions = styled.div(({textColor}) => {

  return [
    tw`w-14 h-14 border-2 border-transparent hover:border-white`,
    textColor && css`
    background-color:${textColor};`
    
  ]
})

const ItemThemeOption = ({ theme }) => {
  const { miniature, textColor } = theme
  return (
    <StylesItemOptions textColor={textColor}>
      {
        miniature && <img src={ miniature } alt="" className='imagen w-full h-full object-fit' />
      }
    </StylesItemOptions>
  );
};

export default ItemThemeOption;

ItemThemeOption.propTypes = {
  image: PropTypes.string,
  theme: PropTypes.object,
}