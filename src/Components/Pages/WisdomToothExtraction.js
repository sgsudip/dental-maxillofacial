import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function WisdomToothExtraction() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>Wisdom tooth extraction</h1>
      <p>Wisdom tooth extraction is recommended if there’s not enough room to accommodate the tooth or teeth, which can lead to impaction and issues associated with it. Wisdom tooth extraction is an outpatient procedure, and you can go home right after. However, resting for a few days is necessary before resuming normal activities.

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Wisdom tooth extraction ?</h2>
          <p><strong>R</strong>Wisdom teeth removal is the extraction of your third molars — the four permanent adult teeth located in the very back of your mouth, in the upper and lower jaws. Wisdom teeth usually erupt between the ages of 17 and 21. Most people have all four of their wisdom teeth
          </p>
          </Col>
          <Col md={4}>
          <img src='images/rct3.jpg' alt='rct2'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </>
  )
}

export default WisdomToothExtraction