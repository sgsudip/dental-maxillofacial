import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function CleaningandExam() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
        <h1>CleaningandExam</h1>
        <p>Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth with the intention of preventing cavities (dental caries), gingivitis, and periodontal disease. People routinely clean their own teeth by brushing and interdental cleaning, and dental hygienists can remove hardened deposits (tartar) not removed by routine cleaning. Those with dentures and natural teeth may supplement their cleaning with a denture cleaning. 
</p>
      </div>
      </div>
      <Container className='general-content'>
        <Row>
          <Col md={7}>
            <h2>What is Teeth cleaning?</h2>
            <p><strong>T</strong>eeth cleaning is the removal of dental plaque and tartar from teeth to prevent cavities, gingivitis, gum disease, and tooth decay. Severe gum disease causes at least one-third of adult tooth loss. Since before recorded history, a variety of oral hygiene measures have been used for teeth cleaning.</p>
          </Col>
          <Col md={4}>
           <img src='images/tc.jpg' alt='teeth cleanig'></img>
          </Col>
        </Row>
        <Row>
        <Col md={4}>
        <img src='images/ttc.jpg' alt='teeth cleaning'></img>
        </Col>
        <Col md={7}>
          <h1>How is tooth cleaning done by dentist?</h1>
          <p><strong>R</strong>egular professional teeth cleaning helps prevent decay and treat gum disease. Scaling, a procedure to clean the area below your gum line, may also be performed while cleaning the teeth. Your dentist or hygienist uses a manual scaler or a high-speed ultrasonic instrument to clean the tooth surfaces.</p>
        </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

export default CleaningandExam
