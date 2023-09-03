import { useState } from "react";
import BoxOptions from "./BoxOptions";
import ItemThemeOption from "./ItemThemeOption";
import autoExportImages from "../assets/autoExportImages";
import tw, { styled } from "twin.macro";
const Header = () => {
  const [isOpenBoxOptions, setIsOpenBoxOptions] = useState(false)

  const handleMenuOptions = () => {
    setIsOpenBoxOptions(prev => !prev)
  }

  const StyledHeaderContainer = styled.div`${tw`text-white mb-5 relative`}`
  const StyledIconBurguer = styled.div`${tw`md:hidden ml-1 text-lg`}`

  return (
    <StyledHeaderContainer>
      <StyledIconBurguer><i className="fa-solid fa-bars"></i></StyledIconBurguer>
      <div className="flex justify-between text-2xl font-bold">
        <div>
          <i className="fa-solid fa-house-chimney"></i>
          <span className="ml-4">Tareas</span>
        </div>

        <div
          onClick={handleMenuOptions}
          className="cursor-pointer ">
          ...
        </div>
      </div>
      {
        isOpenBoxOptions &&
        <BoxOptions>
          {autoExportImages.map(image => <ItemThemeOption key={image} image={image} />)}
        </BoxOptions>
      }
    </StyledHeaderContainer>
  );
};

export default Header;