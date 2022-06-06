import React from 'react'
import styles from './Page2a.module.css'
 function Page2a(props) {
    return (
        <div className={styles.container}>
            <img src={props.img} alt=""/>
            <h2>{props.name}</h2>
            <p>{props.text}</p>
        </div>
    )
}
export default Page2a