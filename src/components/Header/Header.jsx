import React from 'react'
import menu from "../../../public/menu.svg"
import './index.scss'

const Header = () => {
    return (
        <header>
            <nav className='head container'>
                <ul className='head__list'>
                    <li className="head__item"><a href="#" className="head__link">Works</a></li>
                    <li className="head__item"><a href="#" className="head__link">Blog</a></li>
                    <li className="head__item"><a href="#" className="head__link">Contact</a></li>
                </ul>
                <div className="head__menu">
                    <img src={menu} alt="menu icon" />
                </div>
            </nav>
        </header>
    )
}

export default Header