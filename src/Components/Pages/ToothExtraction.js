import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function ToothExtraction() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>Inlays and Onlays</h1>
      <p>Inlays and onlays, also known as indirect fillings, are used when a tooth is too decayed to support a typical filling. These fillings are created in a dental laboratory and bonded in place by a cosmetic dentist.

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Inlays and Onlays Cosmetic treatment ?</h2>
          <p><strong>I</strong>nlays and onlays, also known as indirect fillings, are used when a tooth is too decayed to support a typical filling. These fillings are created in a dental laboratory and bonded in place by a cosmetic dentist.
An “inlay” is when the material is bonded in the center of the tooth. An “onlay” is when the filling covers one or more parts of the tooth or covers the tooth’s entire surface. 
This procedure is an alternative to the crown, preserving more of the tooth’s natural surface while still strengthening and restoring the tooth after decay or deterioration.
          </p>
          </Col>
          <Col md={4}>
          <img src='images/io.jpg' alt='inlays'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </>
  )
}

export default ToothExtraction