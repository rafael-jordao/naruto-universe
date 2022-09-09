import React from 'react'
import Logo from '../assets/naruto_logo.png'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header >
            <img className={styles.logo} alt='Logo' src={Logo} />
        </header>
    )
}

export default Header