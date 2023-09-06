import MainOrderEmail from '../../icons/main-order__email-icon'
import MainOrderTelegram from '../../icons/main-order__telegram-icon'
import WatsUpIcon from '../../icons/main-order__watsup-icon'
import './main-order.css'

function MainOrder() {

  return (
    <div className="main-order">
      <h2 className='main-order__title'>сделать заказ</h2>
      <ul className='main-order__list'>
        <li className='main-order__item'>
          <MainOrderTelegram/>
          <a href=''>написать</a>
        </li>
        <li className='main-order__item'>
          <WatsUpIcon />
          <a href=''>написать</a>
        </li>
        <li className='main-order__item'>
          <MainOrderEmail />
          <a href=''>написать</a>
        </li>
      </ul>
      <form className='main-order__form'>

      </form>
    </div>
  )
}

export default MainOrder