import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const ImageCard = (props) => {
  const {img} = useContext(imgContext);
  console.log(img);
  return(
  <>
    <img src={props.img} alt="фон карточки" height={520} width={840}/>
  </>
)};

export default ImageCard; 