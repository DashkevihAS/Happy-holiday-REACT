import Container from '../Container/Container';
import style from './footer.module.css'
import { ReactComponent as VKIcon} from '../../img/vk.svg';
import { ReactComponent as TGIcon} from '../../img/tg.svg';
import { ReactComponent as PinterestIcon} from '../../img/pinterest.svg';
import { ReactComponent as Stumblecon} from '../../img/stumbleupon.svg';

const Footer = () => (
  <footer className={style.footer}>
    <Container >
      <div className={style.wrapper} >
        <div className={style.contacts}>
          <p>Design: <a href='https://t.me/Mrshmallowww'>Anastasia Ilina</a></p>
          <p>Сoder: <a href='https://t.me/DashkevichAS'>Anton Dashkevich</a></p>
          <p>© HBCard, 2022</p>
        </div>

        <ul className={style.social}>
          <li className={style.item}>
            <a href='https://vk.com/methed' className={style.link}>
              <VKIcon/>
            </a>
          </li>
          <li className={style.item}>
            <a href='https://t.me/methed_chat_frontend' className={style.link}>
              <TGIcon/>
            </a>
          </li>
          <li className={style.item}>
            <a href='https://pinterest.com' className={style.link}>
              <PinterestIcon/>
            </a>
          </li>
          <li className={style.item}>
            <a href='https://stumbleupon.com' className={style.link}>
              <Stumblecon/>
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
)

export default Footer;