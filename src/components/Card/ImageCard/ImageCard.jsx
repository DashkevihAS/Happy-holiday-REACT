import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const ImageCard = () => {
  const {img} = useContext(imgContext);
  console.log(img);
  return(
  <>
    <img src={img} alt="фон карточки" height={520} width={840}/>
  </>
)};

export default ImageCard; 