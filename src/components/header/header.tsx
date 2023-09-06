import HeaderIconTelegram from '../icons/header__icon-telegram';
import HeaderIconLogin from '../icons/header__icon--login';
import HeaderLogo from '../icons/header__logo';
import './header.css'


function Header() {

  return (
      <header className='header'>
        <nav className='header-navigation'>
          <section className='header-logo__wrapper'>
            <a className='header-logo' href="">
              <HeaderLogo />
            </a>
          </section>
          <ul className='header-contatcs'>
            <li className='header-contatcs__item'>
              <HeaderIconTelegram />
              <a className='header-contatcs__link Roboto-Bold' href="">
                написать
              </a>
            </li>
            <li className='header-contatcs__item'>
              <a className='header-contatcs__link Roboto-Bold' href="">
                заказать
              </a>
            </li>
          </ul>
          <ul className='header-about'>
            <li className='header-about__item'>
              <a className='header-contatcs__link Roboto-Bold' href="">
                услуги
              </a>
            </li>
            <li className='header-about__item'>
              <a className='header-contatcs__link Roboto-Bold' href="">
                портфолио
              </a>
            </li>
          </ul>
          <section className='header-login__wrapper'>
            <a className='header-login Roboto-Regular' href="">
              <HeaderIconLogin />
            </a>
          </section>
        </nav>
      </header>
  )
}

export default Header;
