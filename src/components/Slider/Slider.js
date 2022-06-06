import React from 'react'
import styles from './Slider.module.css'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import aa from '../../photo/HEM.jpg'
 function Slider() {
    return (
        
        <Carousel className={styles.slider}>
           
            <Carousel.Item interval={3000}>
                <img className=" w-100" src="https://lp-cms-production.imgix.net/2019-06/49896be85a1fb388c69843635fb37817-palace-of-the-shirvanshahs.jpg" alt="shirvanshahlar sarayi" />
                <Carousel.Caption>
                    <h3>Şirvanşahlar sarayı</h3>
                </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item interval={3000}>
                <img className=" w-100" src="https://images2.alphacoders.com/590/590138.jpg" alt="flame tower" />
                <Carousel.Caption>
                    <h3>Flame Tower</h3>
                </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item interval={3000}>
                <img className=" w-100" src={aa} alt="HEmerkezi" />
                <Carousel.Caption>
                    <h3>Heydər Əliyev mərkəzi</h3>
                 </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    
    )
}
export default Slider