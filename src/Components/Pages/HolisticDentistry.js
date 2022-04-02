import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function HolisticDentistry() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>HOLISTIC DENTISTRY</h1>
      <p>Holistic dentistry is an alternative to traditional dental care. It’s a form of complementary and alternative medicine. 
In recent years, this type of dentistry has grown in popularity.  Some may combine these techniques with conventional methods. But overall, their approach to oral care involves alternative treatments. 
</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h2>What is holistic dentistry?  </h2>
          <p><strong>H</strong>olistic dentistry is a form of dental medicine. It’s also known as:
          <ul><li>	alternative dentistry </li>
          <li>	natural dentistry </li>
          <li>	unconventional dentistry </li>
          <li>biocompatible dentistry </li>
          <li>	progressive dentistry </li>
          <li>integrative dentistry </li></ul>This type of dentistry approaches oral care from a holistic perspective. It considers how oral health affects the whole body, and vice versa. 
Therefore, holistic dentistry treats oral problems by focusing on all aspects of health. This includes your physical, emotional, and spiritual health. 

          </p>
          </Col>
          <Col md={4}>
          <img src='images/hd.jpg' alt='holistic'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
    
    </>
  )
}

export default HolisticDentistry