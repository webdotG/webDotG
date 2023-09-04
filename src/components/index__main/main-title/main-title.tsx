import G from './G';
import './main-title.css'

function MainTitle() {

  return (
    <section className='main-title__wrapper'>
      <div className='letter-g__wrapper' >
      <h1 className='main-title Roboto-Regular'>webDot</h1>
      <G/>
      </div>
      <h6 className='main-title__title Roboto-Regular'>создаю и улучшаю :</h6>
      <div className='main-title__text-wrapper'>
        <p className='main-title__text Roboto-Regular'>сайты</p>
        <p className='main-title__text Roboto-Regular'>приложения</p>
        <p className='main-title__text Roboto-Regular'>чат боты</p>
        <p className='main-title__text Roboto-Regular'>email письма</p>
      </div>
    </section>
  )
}

export default MainTitle;