import { useContext } from 'react';
import { useState } from 'react';
import { holidayContext } from '../../../context/holidayContext';
import style from './Choices.module.css';

const holidays = {
  newyear: 'Новый год',
  birthdayWomen: 'День рождения  Ж',
  birthdayMen: 'День рождения  М',
  womenday: '8 марта',
  knowledgeday: 'День знаний',
}
const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const {holiday, setHoliday} = useContext(holidayContext);

  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  }

  const changeHoliday = tittle => {
    setHoliday(tittle);
    toggleChoices();
  }

  return (
    <div className={style.wrapper}>
      <button onClick={toggleChoices} className={style.button}>
        {holiday}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
        {Object.entries(holidays).map(item => ( 
          <li
            className={style.item}
            key={item[0]}
            onClick={() => changeHoliday(item[1])}
          >
            {item[1]}
          </li>
        ))}
      </ul>)}
    </div>
  );
};

export default Choices;