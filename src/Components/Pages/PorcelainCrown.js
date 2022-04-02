import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function PorcelainCrown() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>PROCELAIN CROWN</h1>
      <p>In dentistry, a crown most commonly refers to a dental cap, a type of dental restoration that completely caps or encircles a tooth or dental implant. A crown may be needed when a large cavity threatens the health of a tooth. A crown is typically bonded to the tooth by dental cement.
      </p>
      </div>
      </div>
      <Container className='general-content'>
        <Row>
      <Col md={7} >
        <h2>What Is A Porcelain Crown? </h2>
        <p><strong>p</strong>orcelain crowns, ceramic crowns, or porcelain teeth, as they are sometimes referred to, are an option for people who have damaged teeth. These are custom-made caps or crowns that are bonded to the tooth, fitting over it and restoring the tooth to its original size, strength, and function.</p>
      </Col>
      <Col md={4}>
        <img src='images/pc.jpg' alt='Porcelain'></img>
      </Col>
       </Row>
       <Row>
       <Col md={4}>
        <img src='images/pc1.jpg' alt='Porcelain'></img>
      </Col>
      <Col md={7} >
        <h2>Are Dental Crowns or Porcelain Crowns Painful?  </h2>
        <p><strong>N</strong>ot with an experienced dentist who has successfully placed many porcelain and dental crowns! 
You will be under local anaesthesia and medicated while your tooth or teeth are prepped for the crown and when the crowns are applied. 
Once the first appointment is over and the temporary crowns are placed, you may feel some sensitivity in your gums and around the non-permanent crown. 
Upon the placement of the permanent crown you may feel some discomfort (that’s usually described as a small pinch) but the procedure will be performed under local anaesthetics and topical numbing agents will be applied as well. 
After the placement of the permanent crown, you may have some soreness and you will need to stick to soft foods for a while after the crowns are installed, but there should not be any significant or lingering pain. 
</p>
        </Col>
       </Row>
       </Container>
       <Footer/>
       </>
  )
}

export default PorcelainCrown
