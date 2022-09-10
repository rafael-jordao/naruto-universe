import React from 'react'
import styles from '../Character/CharacterModal.module.css'
import CharacterContent from '../Character/CharacterContent'

const CharacterModal = ({ character, setModal}) => {

    const handleOutsideClick = (event) => {
        if(event.target === event.currentTarget) {
            setModal(null)
        }
    }

    return (
        <>
            {character && (
                <div onClick={handleOutsideClick} className={styles.modal}>
                    <CharacterContent character={character} />
                </div>
            )}

        </>


    )
}

export default CharacterModal