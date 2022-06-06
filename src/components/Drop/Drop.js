import React from 'react'
import styles from './Drop.module.css'
import {Dropdown}   from 'react-bootstrap'
import {Link} from "react-router-dom"
 function Drop() {
    return (
        <Dropdown  className={styles.container}>
            <Dropdown.Toggle variant="secondary" className={styles.menu} >
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.drop}>
              <Link to="/">Home</Link>
              <Link to="/page1">Qarabağ</Link>
              <Link to="/page2">Ətraf rayonlar</Link>
              <Link to="/page3">Bloq</Link>
            </Dropdown.Menu>
         </Dropdown>
    )
}

export default Drop