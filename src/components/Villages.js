import React from 'react'
import styles from './Villages.module.css'
import { GET_ALL_VILLAGES } from '../Api';

const Villages = ({handleClick}) => {
    const [data, setData] = React.useState([]);

    React.useState(() => {
        const getApiData = async () => {
            const { url, options } = GET_ALL_VILLAGES()
            const req = await fetch(url, options);
            const json = await req.json();
            const results = json.data.villages.results
            setData(results)
        }

        getApiData();
    }, [])


    return (
        <ul className={styles.ul}>
            {data.map((village) => {
                return (
                    <li onClick={handleClick} className={styles.li} key={village._id}>{village.name}</li>
                )
            })}
        </ul>
    )
}

export default Villages