import style from './Picture.module.css';

const Picture = () => (
  <>
    <img className={style.img} src="./card-bg.jpg" alt="фон карточки" />
  </>
);

export default Picture;