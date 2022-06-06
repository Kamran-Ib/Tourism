import React from 'react'
import styles from './Header.module.css'

import foto from '../../photo/xaribulbul.png'
import { Nav,Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";
import Drop from '../Drop/Drop'
 function Header() {
    return (


        
    <Navbar className={styles.container}>
        <Nav className={styles.xari}>
                <Link to="/"><img src={foto} alt="xaribulbul"/></Link>
                <Link to="/"> <h3>Xarıbülbül<br/>tour</h3></Link>
        </Nav>
        <Nav className={styles.link}>
                <Link to="/">Ana səhifə</Link>
                <Link to="/page1">Qarabağ</Link>
                <Link to="/page2">Ətraf rayonlar</Link>
                <Link to="/page3">Bloq</Link>
        </Nav>
        <Drop/>
    </Navbar>
      
       
    )
}
export default Header