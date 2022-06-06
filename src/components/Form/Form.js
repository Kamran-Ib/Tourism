import React,{useState} from 'react'
import styles from './Form.module.css'
 function Form() {

    const [email,setEmail] = useState("")
    const [error,setError] = useState("")

    function inputEmailH(e){
        setEmail(e.target.value)
    }
    
    function submitHandler(e){
        e.preventDefault()
        
        
        if(email=== ""){
            setError("DOOOLDUR*")
        }
    }

    return (
        <div className={styles.container}>
             <form onSubmit={submitHandler}>
                  
                   <input type="email" value={email} onChange={inputEmailH} placeholder="E-mail address"/>
            
                   <button type="submit">ABUNƏ</button>
             </form>
        </div>
    )
}
export default Form