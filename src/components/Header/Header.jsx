import { useDispatch, useSelector } from 'react-redux';
import { fetchText } from '../../store/textSlice';
import { fetchImg } from '../../store/imgSlice';
import Layout from '../Layout/Layout';
import Choices from './Choices/Choices';
import style from './Header.module.css';

const Header = () => {
  const {holiday} = useSelector(state => state.holidays);
  const dispatch = useDispatch();
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button
              className={style.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchText(holiday))
              }}
            >
              Поменять поздравление
            </button>

            <button
              className={style.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchImg(holiday))
              }}
            >
              Поменять фон
            </button>
          </div>

          <Choices/>
        </div>
      </Layout>
    </header>
  );
  };

export default Header;