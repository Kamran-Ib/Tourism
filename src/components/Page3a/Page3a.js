
import React,{useState} from 'react'
import styles from './Page3a.module.css'
import Modal from '../Modal/Modal'

 function Page3a(props) {

   


        const [show,setShow]=useState(false)

        function showModal(){
            setShow(true)
        }
        function closeModal(){
            setShow(false)
        }


    return (
           
        <div >
               
                <div className={styles.container}>
                    <img src={props.data.img} alt=""/>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.text}</p>
                    
                    <button onClick={showModal}>{props.data.btn}</button>

                    {
                    show ? <Modal close={closeModal} name={props.data.name} etraflı={props.data.par} sek={props.data.sek}  /> : null
                    }
              </div>
               
        </div>


    )
}
export default Page3a