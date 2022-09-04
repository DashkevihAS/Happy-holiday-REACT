import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import style from './Layout.module.css';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const Layout = () => {
  const { text: {idText}, img: {idImg} } = useSelector(state => state);
  return (
    <div style={wrapper}>
      <Header />
      <Outlet />
      {idText && idImg &&
          <Link
            to={`singleCard/${idText}/${idImg}`}
            className={style.button}
            >Поделиться картинкой
          </Link>
      }
      <Footer />
    </div>
  );
}

export default Layout;