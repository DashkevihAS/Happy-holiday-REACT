import { useSelector } from "react-redux";
import imgBG from '../../../img/card-bg.jpg';

const ImageCard = () => {
  const { urlImg } = useSelector(state => state.img);
  return(
  <>
    <img src={urlImg || imgBG} alt="фон карточки" height={520} width={840}/>
  </>
)};

export default ImageCard; 