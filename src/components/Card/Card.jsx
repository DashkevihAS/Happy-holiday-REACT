import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchImgId } from '../../store/imgSlice';
import { fetchTextId } from '../../store/textSlice';
import style from './Card.module.css';
import Felicitation from './Felicitation/Felicitation';
import ImageCard from './ImageCard/ImageCard';

const Card = () => {
  const { idText, idImg } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (idText && idImg) {
      dispatch(fetchTextId(idText));
      dispatch(fetchImgId(idImg));
    }
  }, [idText, idImg, dispatch])

  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <ImageCard />
          <Felicitation />
        </div>
      </div>
    </div>
  );
};

export default Card;