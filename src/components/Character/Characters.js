import React from 'react'
import styles from '../Character/Characters.module.css'

const Characters = ({ village, name, rank, avatarSrc, description, _id, setModal }) => {

    const handleModalClick = () => {
        setModal({ avatarSrc, village, name, rank, description, _id })
    }

    return (
        <li onClick={handleModalClick} className={styles.character} key={_id}>
            <img className={styles.charImage} alt='Character' src={avatarSrc} />
            <h3 className={styles.name}>{name}</h3>
        </li>
    )
}

export default Characters