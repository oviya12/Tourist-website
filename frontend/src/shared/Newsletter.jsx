import React from 'react'
import'./newsletter.css'

import {Container, Row, Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const handleClick = () => {
    alert('Thank you for your interest');
};


const Newsletter = () => {
    return <section className='newsletter'>
     <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                 <h3> Subscribe now to get useful travelling information</h3> 
                 <div className='newsletter__input'>
                  <input type='email' placeholder="Enter your mail" />
                  <button className='btn newsletter__btn'onClick= {handleClick} >Subscribe</button>  
                    </div>  
                    <p>
                        Don't miss out any updates!!!! 
                    </p>
                </div>

            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt=" "/>
                </div>
            
            
            </Col>
        </Row>
        </Container>   
    </section>

}
export default Newsletter;