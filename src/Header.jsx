import { useState } from "react";
import BoxOptions from "./BoxOptions";
import ItemThemeOption from "./ItemThemeOption";
import autoExportImages from "./assets/autoExportImages";
import tw, {css, styled} from "twin.macro";
const Header = () => {
  const [isOpenBoxOptions, setIsOpenBoxOptions] = useState(false)

  const handleMenuOptions = () => {
    setIsOpenBoxOptions(prev => !prev)
  }

  const CardContainer = styled.div(() => [
    tw`text-white mb-5 relative bg-red-400`,
  ]);



  return (
    <CardContainer>
      <div className="md:hidden ml-1 text-lg"><i className="fa-solid fa-bars"></i></div>
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
          {autoExportImages.map(image=> <ItemThemeOption key={image.imageSrc} image={image.imageSrc}/>)    }
        </BoxOptions>
      }
    </CardContainer>
  );
};

export { Header };