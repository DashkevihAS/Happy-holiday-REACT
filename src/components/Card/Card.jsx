import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation';
import Picture from './Picture/Picture';

const Card = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <div className={style.image}>
        <Picture />
        <Felicitation />
      </div>
    </div>
  </div>
);

export default Card;