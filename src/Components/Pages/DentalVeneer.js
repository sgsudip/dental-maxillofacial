import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function DentelVeneers() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>DENTAL VENEERS</h1>
      <p>Dental veneers are thin, white shells made from medical-grade porcelain, resin, or ceramic. They’re custom made for each patient to resemble their natural teeth.
</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Dental Veneers ?</h2>
          <p><strong>D</strong>ental veneers are thin, white shells made from medical-grade porcelain, resin, or ceramic. They’re custom made for each patient to resemble their natural teeth.
Before attaching the veneers, the dentist removes some enamel from the tooth’s surface to allow the shells to be bonded realistically to the front of the teeth. Dental veneers can fix a number of cosmetic issues, including crooked teeth, damaged enamel, and gaps between teeth.
          </p>
          </Col>
          <Col md={4}>
          <img src='images/dv.jpg' alt='teeth Whitening'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </>
  )
}

export default DentelVeneers