import React from 'react'
import Characters from '../Character/Characters'
import { GET_ALL_CHARACTERS } from '../../Api'
import styles from './CharactersFeed.module.css'
import Loading from '../Helper/Loading'
import Form from '../Form/Form'

const CharactersFeed = ({ setModal, page }) => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(null)
    const [input, setInput] = React.useState('');

    React.useEffect(() => {
        const getApiData = async () => {
            setLoading(true)
            const { url, options } = GET_ALL_CHARACTERS(page)
            const request = await fetch(url, options)
            const json = await request.json()
            const results = json.data.characters.results
            setData(results)
            console.log(results)
            // if(results === 0) {
            //     return 
            // }
            setLoading(false)
        }

        getApiData()
    }, [page])

    const handleChange = ({ target }) => {
        setInput(target.value)
    }

    return (
        <section className='animeLeft'>
            <Form label='Search what do you want :)' placeHolder='Sasuke Uchiha...' value={input} handleChange={handleChange} />
            {loading && <Loading />}
            <div className={styles.characterContainer}>

                {data.filter((char) => {
                    let name = char.name.toLowerCase().includes(input.toLowerCase());
                    let village = char.village.toLowerCase().includes(input.toLowerCase());
                    if (input == "") {
                        return char
                    } else if (name || village) {
                        return char
                    }
                }).map((char) => {
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