import React from 'react'
import styles from './Home2.module.css'

 function Home2(props) {

    

 return (
        <div className={styles.cont}>
            <img  src={props.data.img} alt=""/>
            <h3 >{props.data.name}</h3>
        </div>
    )
}
export default Home2