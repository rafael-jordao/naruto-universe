import React from 'react'
import styles from './CharacterContent.module.css'

const CharacterContent = ({ character }) => {

    return (
        <div className={styles.photo}>
            <img className={styles.img} src={character.avatarSrc} />
            <div className={styles.details}>
                <h1 className={styles.name}>{character.name}</h1>
                <div className={styles.villageAndRank}>
                    <p className={styles.village}>Village: {character.village}</p>
                    <span className={styles.rank}>Rank: {character.rank}</span>
                </div>
                <p className={styles.description}>{character.description}</p>
            </div>
        </div>
    )
}

export default CharacterContent;