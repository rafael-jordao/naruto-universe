import React from 'react'
import Naruto from '../assets/naruto-home.png';
import styles from './MainSection.module.css'

const MainSection = ({ heading, subHeading }) => {
    return (
        <section className='main'>
            <div className='container grid'>
                <div className='animeLeft'>
                    <h1 className={styles.heading}>{heading}</h1>
                    <p className={styles.subHeading}>{subHeading}</p></div>
                <img className={styles.naruto} alt='Naruto' src={Naruto} />
            </div>
        </section>
    )
}

export default MainSection