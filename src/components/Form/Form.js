import React from 'react'
import styles from './Form.module.css'

const Form = ({ handleSubmit, handleChange, placeHolder, label, value }) => {

    return (
        <div className={styles.formContainer}>
            <form
                className={styles.form}
                onSubmit={handleSubmit}>
                <label className={styles.label}>{label}</label>
                <input
                    className={styles.input}
                    placeholder={placeHolder}
                    onChange={handleChange}
                    value={value} type='text' />
                {/* <button className={styles.button}>{textButton}</button> */}
            </form>
        </div>
    )
}

export default Form