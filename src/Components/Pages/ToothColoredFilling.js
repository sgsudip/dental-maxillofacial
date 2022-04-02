import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function ToothColoredFilling() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>TOOTH COLORED FILLING</h1>
      <p>With tooth colored fillings for kids, commonly known as composite fillings, modern dentistry has made it feasible to treat cavities discreetly. Pediatric dentists provide composite fillings that will allow kids to keep teeth that have been damaged by cavities in a way that is both functional and attractive.

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is tooth colored filling ?</h2>
          <p><strong>R</strong>With tooth colored fillings for kids, commonly known as composite fillings, modern dentistry has made it feasible to treat cavities discreetly. Pediatric dentists provide composite fillings that will allow kids to keep teeth that have been damaged by cavities in a way that is both functional and attractive.
          If a child has cavities, they may require pediatric fillings. Many cavities are difficult to notice and are asymptomatic, while some are visible and cause discomfort. As part of the child's normal biannual exam, the dentist will take x-rays to determine whether or not the youngster requires a filling. All children should have a professional dental exam twice a year with a pediatric dentist. Regular examinations help detect tooth decay in its early stages when it is most treatable. Regular cleanings and dental sealants can also assist in preventing the occurrence of cavities.
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

export default ToothColoredFilling