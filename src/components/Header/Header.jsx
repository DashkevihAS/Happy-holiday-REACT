import Layout from '../Layout/Layout';
import Choices from './Choices/Choices';
import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.wrapper}>
        <div className={style.buttons}>
          <button className={style.button}>Поменять поздравление</button>
          <button className={style.button}>Поменять фон</button>
        </div>

        <Choices/>
      </div>
    </Layout>
  </header>
);

export default Header;