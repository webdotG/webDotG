import './main-about.css'

function MainAbout() {

  return (
    <div className='main-about__wrapper'>
      <h2 className='main-about__title'>как я работаю </h2>
      <ul className='main-about__list'>
        <li className='main-abou__item'>
          <img src='../../../../public/img/icon--thinking.png' />
          изучаю задачу, составляю ТЗ
        </li>
        <li className='main-abou__item'>
          <img src='../../../../public/img/icon--idea.png' />
          разрабатываю концепцию и дизайн
        </li>
        <li className='main-abou__item'>
          <img src='../../../../public/img/icon--data.png' />
          верстаю и программирую
        </li>
        <li className='main-abou__item'>
          <img src='../../../../public/img/icon--test.png' />
          тестирую
        </li>
        <li className='main-abou__item'>
          <img src='../../../../public/img/icon--start.png' />
          запускую
        </li>
      </ul>
    </div>
  )
}

export default MainAbout