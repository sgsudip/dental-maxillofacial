import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function TeethWhitening() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>TEETH WHITENING</h1>
      <p>Teeth whitening is one of the most basic cosmetic dentistry procedures—as well as one of the least expensive. Over time, teeth can become stained from food, drinks, medications, or other habits like smoking. Many people turn to teeth whitening to make their smile brighter.
</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Teeth Whitening ?</h2>
          <p><strong>T</strong>Teeth whitening is one of the most basic cosmetic dentistry procedures—as well as one of the least expensive. Over time, teeth can become stained from food, drinks, medications, or other habits like smoking. Many people turn to teeth whitening to make their smile brighter.
After teeth have been cleaned of plaque, tartar, and other debris, teeth whitening can bleach the surface of teeth to create a brighter, whiter appearance. While over-the-counter products like toothpaste, rinses, and whitestrips can offer some results, professional tooth whitening can provide a shade up to 5 to 8 times lighter.
          </p>
          </Col>
          <Col md={4}>
          <img src='images/tw.jpg' alt='teeth Whitening'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </>
    
  )
}

export default TeethWhitening