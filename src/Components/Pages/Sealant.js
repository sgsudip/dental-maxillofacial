import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function Sealant() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>SEALANT</h1>
      <p>sealants   are thin, plastic coatings painted on the chewing surfaces of the teeth. While they are not substitutes for daily brushing and flossing, dental sealants can prevent cavities from forming

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What is Sealant ?</h2>
          <p><strong>D</strong>ental sealants   are thin, plastic coatings painted on the chewing surfaces of the teeth. While they are not substitutes for daily brushing and flossing, dental sealants can prevent cavities from forming. 
          </p>
          </Col>
          <Col md={4}>
          <img src='images/kids.jpg' alt='sealant'></img>
        </Col>
          </Row>
          <Row>
          <Col md={4}>
          <img src='images/kids.jpg' alt='sealant'></img>
        </Col>
    
        <Col md={7}>
        <h2>HOW DO THEY WORK?
 </h2>
          <p><strong>D</strong>ental sealants work as their name implies — they seal and help protect the teeth. Dentists place them over the grooved and pitted areas that exist in premolars and molars. Sometimes, the grooves in these teeth are narrower than a single toothbrush bristle, making them quite challenging to clean, especially for children. In addition, without regular, thorough brushing, plaque forms on the surface of the teeth, and over time, it creates a small hole known as a cavity. Once applied, dental sealants add an extra layer of protection over these hard-to-brush areas by creating a smooth surface to keep food out and your child’s teeth cavity-free.  
The  dental sealants can also be placed over cavities in their early stages to help stop the tooth decay process. Since they are clear, your dentist can still view what is going on inside the tooth even after the dental sealants are applied. 

          </p>
          </Col>
         
        
          </Row>
          </Container>
          <Footer/>
          </>
  )
}

export default Sealant