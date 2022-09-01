import { useState, useContext } from 'react';
import { holidayContext } from '../../../context/holidayContext';
import style from './Choices.module.css';

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const {holiday, changeHoliday, holidays} = useContext(holidayContext);

  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  }

  return (
    <div className={style.wrapper}>
      <button onClick={toggleChoices} className={style.button}>
        {holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
        {Object.entries(holidays).map(item => ( 
          <li
            className={style.item}
            key={item[0]}
            onClick={() => {
              changeHoliday(item[0]);
              toggleChoices();
            }}
          >
            {item[1]}
          </li>
        ))}
      </ul>)}
    </div>
  );
};

export default Choices;