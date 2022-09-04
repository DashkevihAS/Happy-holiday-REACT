import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHolidays } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';
import { fetchImg } from '../../../store/imgSlice';
import style from './Choices.module.css';
import { NavLink, useParams } from 'react-router-dom';

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holidays, loading } = useSelector(state => state.holidays);
  const dispatch = useDispatch();
  const { holiday } = useParams();

  const toggleChoices = () => {
    if (loading !== 'success') return;
    setIsOpenChoices(!isOpenChoices);
  }

  useEffect(() => {
    dispatch(fetchHolidays());
    if (holiday) {
      dispatch(fetchText(holiday));
      dispatch(fetchImg(holiday));
    }
  }, [holiday, dispatch])

  return (
    <div className={style.wrapper}>
      <button onClick={toggleChoices} className={style.button}>
        {loading !== 'success' ? 
          'Загрузка...' :
          holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
        {Object.entries(holidays).map(item => ( 
          <li
            className={style.item}
            key={item[0]}
            onClick={() => {
              toggleChoices();
            }}
          >
            <NavLink
              to={`card/${item[0]}`}
              className={({isActive}) => (isActive ? style.linkActive : '')}
              >{item[1]}
            </NavLink>
          </li>
        ))}
      </ul>)}
    </div>
  );
};

export default Choices;