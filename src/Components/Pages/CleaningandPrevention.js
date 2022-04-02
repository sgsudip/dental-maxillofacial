import React from 'react'
import { Container , Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'


function CleaningandPrevention() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>CLEANING AND PREVENTION</h1>
      <p> Keeping a regular preventative maintenance schedule with your child’s hygienist and dentist at Care for Kids Pediatric Dentistry helps you prevent not only tooth decay and periodontal disease but also avoid costly procedures and extra time in the hygiene chair.

      </p>
      </div>
      </div>
      <Container className='general-content'>
        <Row>
      <Col md={7} >
        <h2>What is Cleaning and Prevention?</h2>
        <p><strong>K</strong>eeping a regular preventative maintenance schedule with your child’s hygienist and dentist at Care for Kids Pediatric Dentistry helps you prevent not only tooth decay and periodontal disease but also avoid costly procedures and extra time in the hygiene chair.
        A regular home prevention routine usually consists of brushing at least twice a day and flossing at least once per day. But did you know there are other tools to make taking care of your child’s mouth a little easier? Depending on their needs, there are special kinds of toothpaste, rinses, and even flossing aids that can help you keep their smile bright and healthy for years to come. Care for Kids Pediatric Dentistry can help you and your child find the best tools to enhance your daily hygiene routine making your child’s professional cleaning appointments shorter and less stressful.
Another significant factor in your child’s oral health is their diet. Acidic foods and drinks can erode enamel just as a balanced diet can help keep their teeth and gums strong and healthy.
Regular professional exams and cleanings, a dedicated at-home hygiene routine, and a healthy, balanced diet can help prevent minor issues from becoming major procedures</p>
      </Col>
      <Col md={4}>
        <img src='images/smile.jpg' alt='cleaning'></img>
      </Col>
      </Row>
      </Container>
    <Footer/>
    </>
  )
}

export default CleaningandPrevention