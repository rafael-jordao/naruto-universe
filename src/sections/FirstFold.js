import React from 'react'
import styles from './FirstFold.module.css'
import CharactersFeed from '../components/Character/CharactersFeed'
import CharacterModal from '../components/Character/CharacterModal'
// import Form from '../components/Form/Form.js'
import Villages from '../components/Villages'
import { GET_ALL_CHARACTERS } from '../Api'

export const FirstFold = () => {
    const [modal, setModal] = React.useState(null);
    const [pages, setPages] = React.useState(1)

    const handleNextPage = () => {
        if (pages < 12) {
            setPages(pages + 1)
        }
    }

    const handlePreviusPage = () => {
        if (pages > 1) setPages(pages - 1)
    }

    return (
        <section className={styles.firstFold}>
            {modal && <CharacterModal setModal={setModal} character={modal} />}
            <div className='container animeLeft'>
                <h2 className={styles.heading}>Characters</h2>
        
                {pages < 12 ? '' : <p className={styles.lastPage}>This is the last page!</p>}
                <div className={styles.buttonsContainer}>
                    <button className={styles.buttonPass} onClick={handlePreviusPage}>Previous page</button>
                    <button className={styles.buttonPass} onClick={handleNextPage}>Next page</button>
                </div>
                <CharactersFeed page={pages} setModal={setModal} />
            
            </div>
        </section>
    )
}
