import React from 'react'
import styles from './Modal.module.css'

 function Modal(props) {
    return (




        <div className={styles.container}>
            <h2>{props.name}</h2>
            <p>{props.etraflı}</p>
            <button onClick={props.close}>Geri</button>
          
            <img src={props.sek} alt=""/>
                    
                 
        </div>
                 
                  
      

    )
}
export default Modal