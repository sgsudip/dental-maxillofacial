import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function Reconstructive() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>Reconstructive procedure</h1>
      <p>The mouth may require reconstructive surgery due to severe trauma. A person may sustain injuries on the cheek, lips, or tongue, or lose one or several teeth. The extent of the surgery depends on the overall damage to the mouth. Working with an oral surgeon is crucial to determine the best solution so you can restore the health and appearance of your mouth in the shortest time possible.

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Reconstructive procedure ?</h2>
          <p><strong>T</strong>he mouth may require reconstructive surgery due to severe trauma. A person may sustain injuries on the cheek, lips, or tongue, or lose one or several teeth. The extent of the surgery depends on the overall damage to the mouth. Working with an oral surgeon is crucial to determine the best solution so you can restore the health and appearance of your mouth in the shortest time possible.
          </p>
          </Col>
          <Col md={4}>
          <img src='images/rct1.jpg' alt='rct2'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </> 
  )
}

export default Reconstructive