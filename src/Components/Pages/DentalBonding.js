import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function DentalBonding() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>DENTAL BONDING</h1>
      <p>For dental bonding, the cosmetic dentist applies a moldable resin to the tooth and hardens it with ultraviolet light. Then, they trim, shape, and polish the material to blend into the surface of the tooth. 

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Dental Bonding ?</h2>
          <p><strong>F</strong>or dental bonding, the cosmetic dentist applies a moldable resin to the tooth and hardens it with ultraviolet light. Then, they trim, shape, and polish the material to blend into the surface of the tooth. 
Bonding can repair chips, cracks, misshapen teeth, and tooth decay. For minor cosmetic issues, bonding is a more affordable alternative to fillings or crowns. 

          </p>
          </Col>
          <Col md={4}>
          <img src='images/db.jpg' alt='teeth Whitening'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </>
  )
}

export default DentalBonding