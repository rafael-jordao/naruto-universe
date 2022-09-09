import React from 'react'
import styles from './Footer.module.css'
import Logo from '../assets/naruto_logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img className={styles.logo} alt='Logo' src={Logo} />
        <p className={styles.subheading}>Naruto's Universe from A to Z.</p>
        <span className={styles.span}>All the data is provider by: <a className={styles.a} target="_blank" rel="noreferrer" href='https://www.narutoql.com/'>NarutoQL</a></span>
      </div>
    </footer>
  )
}

export default Footer;