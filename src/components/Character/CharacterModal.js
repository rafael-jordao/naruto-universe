import React from 'react'
import styles from '../Character/CharacterModal.module.css'
import { GET_SINGLE_CHARACTER } from '../../Api'
import CharacterContent from '../Character/CharacterContent'

const CharacterModal = ({ character, setModal}) => {

    React.useEffect(() => {
        const getApiData = async () => {
            const { url, options } = GET_SINGLE_CHARACTER(character._id);
            await fetch(url, options)
        }
        getApiData();
    }, [])

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