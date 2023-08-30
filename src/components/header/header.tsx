import HeaderNavBtn from './header__nav-btn/header-nav_btn';
import './header.css'
import HeaderIconLogin from './header__icon/header__icon--login';
import HeaderLogo from './header__icon/header__logo';

const linkСontact = 'написать'
const linkClient = 'заказать'
const linkService = 'услуги'
const linkPortfolio = 'портфолио'

function Header() {

  return (

    <>
      <header className='header'>
        <nav className='header-navigation'>
          <section className='header-logo__wrapper'>
            <a className='header-logo' href="">
              <HeaderLogo />  
            </a>
          </section>
          <ul className='header-contatcs'>
            <li className='header-contatcs__item'>
              <HeaderNavBtn link={linkСontact} />
            </li>
            <li className='header-contatcs__item'>
              <HeaderNavBtn link={linkClient} />
            </li>
          </ul>
          <ul className='header-about'>
            <li className='header-about__item'>
              <HeaderNavBtn link={linkService} />
            </li>
            <li className='header-about__item'>
              <HeaderNavBtn link={linkPortfolio} />
            </li>
          </ul>
          <section className='header-login__wrapper'>
            <a className='header-login Roboto-Regular' href="">
              <HeaderIconLogin />
            </a>
          </section>
        </nav>
      </header>
    </>
  )
}

export default Header;
