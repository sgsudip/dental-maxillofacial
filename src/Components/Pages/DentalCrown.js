import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'
function DentalCrown() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>DENTAL CROWN</h1>
      <p>A dental crown, also known as a dental cap, fits over a decayed or damaged tooth. These crowns can keep a weakened tooth from breaking or be used cosmetically to cover misshapen or severely discoloured teeth. 
</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Dental Crown? ?</h2>
          <p><strong>A</strong> dental crown, also known as a dental cap, fits over a decayed or damaged tooth. These crowns can keep a weakened tooth from breaking or be used cosmetically to cover misshapen or severely discoloured teeth. 
They can also be used to cover other procedures, like root canals, enamel fillings, dental bridges, or dental implants. 
          </p>
          </Col>
          <Col md={4}>
          <img src='images/dc.jpg' alt='teeth Whitening'></img>
        </Col>
          </Row>
         
          </Container>
          <Footer/>
          </>
  )
}

export default DentalCrown