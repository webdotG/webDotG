import './main-about.css'

function MainAbout() {

  return (
    <div className='main-about__wrapper'>
      <h2 className='main-about__title'>как я работаю</h2>
      <ul className='main-abou__list'>
        <li className='main-abou__item'>изучаю задачи, составляю ТЗ
          <img src='../../../../public/img/icon--thinking.png'/>
        </li>
        <li className='main-abou__item'>разрабатываю концепцию и дизайн
        <img src='../../../../public/img/icon--idea.png' />
        </li>
        <li className='main-abou__item'>верстаю и программирую
        <img src='../../../../public/img/icon--data.png' />
        </li>
        <li className='main-abou__item'>тестирую
        <img src='../../../../public/img/icon--test.png'/>
        </li>
        <li className='main-abou__item'>запускую
        <img src='../../../../public/img/icon--start.png'/>
        </li>
      </ul>
    </div>
  )
}

export default MainAbout