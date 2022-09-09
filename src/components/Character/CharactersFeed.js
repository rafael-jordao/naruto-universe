import React from 'react'
import Characters from '../Character/Characters'
import { GET_ALL_CHARACTERS } from '../../Api'
import styles from './CharactersFeed.module.css'
import Loading from '../Helper/Loading'

const CharactersFeed = ({ setModal, page }) => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(null)

    React.useEffect(() => {
        const getApiData = async () => {
            setLoading(true)
            const { url, options } = GET_ALL_CHARACTERS(page)
            const request = await fetch(url, options)
            const json = await request.json()
            const results = json.data.characters.results
            setData(results)
            setLoading(false)
        }

        getApiData()
    }, [page])




    return (
        <section className='animeLeft'>
            {loading && <Loading />}
            <div className={styles.characterContainer}>

                {/* {village.map((char) => {
                    return (
                        <Characters
                            setModal={setModal}
                            key={char._id}
                            _id={char._id}
                            name={char.name}
                            description={char.description}
                            village={char.village}
                            rank={char.rank}
                            avatarSrc={char.avatarSrc} />
                    )
                })} */}

                {data.map((char) => {
                    return (
                        <Characters
                            setModal={setModal}
                            key={char._id}
                            _id={char._id}
                            name={char.name}
                            description={char.description}
                            village={char.village}
                            rank={char.rank}
                            avatarSrc={char.avatarSrc} />)
                })}
            </div>
        </section>
    )
}

export default CharactersFeed