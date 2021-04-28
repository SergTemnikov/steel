import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <ul className='header__list-items'>
        <li>
          <Link to='/home'>Главная</Link>
        </li>
        <li>Галерея</li>
        <li>Видео</li>
        <li>
          <Link to='/audio'>Музыка</Link>
        </li>
        <li>
          <Link to='/contacts'>Контакты</Link>
        </li>
        <li>
          <Link to='/about'>О нас</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header