import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function DentalImplant() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>DENTAL IMPLANTS</h1>
      <p>After severe tooth decay or tooth loss, dental implants are used to replace teeth. The cosmetic dentist first attaches a screw to the jaw to provide support. Then, the implant is inserted into the bone socket of the missing tooth. 

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Dental Implants ?</h2>
          <p><strong></strong>After severe tooth decay or tooth loss, dental implants are used to replace teeth. The cosmetic dentist first attaches a screw to the jaw to provide support. Then, the implant is inserted into the bone socket of the missing tooth. 
Over time, the bone and tissue fuse to the implant, securing the replacement tooth inside the mouth. Once properly attached, the dental implant should blend into the surrounding teeth.
          </p>
          </Col>
          <Col md={4}>
          <img src='images/di.jpg' alt='teeth Whitening'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </>
  )
}

export default DentalImplant