import style from './Picture.module.css';
import img from '../../../img/card-bg.jpg';

const Picture = () => (
  <>
    <img className={style.img} src={img} alt="фон карточки" />
  </>
);

export default Picture;