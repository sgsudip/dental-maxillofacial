import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function RootCanalTherapy() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>Root Canal Therapy</h1>
      <p> Root canal treatments are done to save natural teeth. The procedure can be completed in a single dental visit. Your dentist may recommend it if the pulp becomes infected and damaged. Left untreated, this can result in swelling and severe pain that extends to the neck and jaw.

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is root canal therapy ?</h2>
          <p><strong>R</strong>oot canal is a treatment to repair and save a badly damaged or infected tooth instead of removing it. The term "root canal" comes from cleaning of the canals inside a tooth's root.
          </p>
          </Col>
          <Col md={4}>
          <img src='images/rct2.jpg' alt='rct2'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </>
  )
}

export default RootCanalTherapy