import React from 'react'
import styles from './Footer.module.css'
import Form from '../Form/Form'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

 function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.melumat}>
                <h5> Xarıbülbül<br/>TOUR</h5>
                <p>
                   Addres: Sumqayit ş. <br/>
                    Tel: +672 77 434 65 14<br/>
                    Info: Haribulbu.az
                </p>
            </div>
           
            <div className={styles.form}>
               <p>ABUNƏ OL</p>
               <Form className={styles.foot}/>

               <div className={styles.icon}>
                   <a href="https://www.google.com/" rel="" target="_blank"><FaFacebookSquare/></a>
                   <a href="https://www.google.com/" target="_blank"><FaInstagram/></a>
                   <a href="https://www.google.com/" target="_blank"><FaTelegram/></a> 
                   <a href="https://www.google.com/" target="_blank"><FaTwitterSquare/></a> 
                   <a href="https://www.google.com/" target="_blank"><FaLinkedin/></a> 
                   <a href="https://www.google.com/" target="_blank"><FaTripadvisor/></a>
               </div>

              
            </div>
        </div>
    )
}
export default Footer