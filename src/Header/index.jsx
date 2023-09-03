import PropTypes from 'prop-types';
import { useState } from "react";
import tw, { styled, css } from "twin.macro";

// Components imports
import BoxOptions from "./BoxOptions";
import ItemThemeOption from "./ItemThemeOption";
import themes from '../assets/themes';


// Styles
const StyledHeaderContainer = styled.div`${tw`text-white mb-5 relative`}`
const StyledIconBurguer = styled.div`${tw`md:hidden ml-1 text-lg`}`
const StyledWrapperIconHome = styled.div(({textColor})=>[
  textColor && css`
    color: ${textColor};`
])


// Component
const Header = ({ setActualTheme, textColor }) => {
  const [isOpenBoxOptions, setIsOpenBoxOptions] = useState(false)

  const handleMenuOptions = () => {
    setIsOpenBoxOptions(prev => !prev)
  }

  const handleChangeTheme = (theme)=>{
    setActualTheme(theme)
  }

  return (
    <StyledHeaderContainer>
      <StyledIconBurguer><i className="fa-solid fa-bars"></i></StyledIconBurguer>
      <div className="flex justify-between text-2xl font-bold">
        <StyledWrapperIconHome textColor={textColor}>
          <i className="fa-solid fa-house-chimney"></i>
          <span className="ml-4">Tareas</span>
        </StyledWrapperIconHome>

        <div
          onClick={handleMenuOptions}
          className="cursor-pointer ">
          ...
        </div>
      </div>
      {
        isOpenBoxOptions &&
        <BoxOptions>
          {themes.map(theme =>
            <div key={theme.id}  onClick={()=>handleChangeTheme(theme)}>
              <ItemThemeOption theme={theme} />
            </div>
          )}
        </BoxOptions>
      }
    </StyledHeaderContainer>
  );
};

export default Header;

Header.propTypes = {
  setActualTheme: PropTypes.func,
  textColor:  PropTypes.string
}