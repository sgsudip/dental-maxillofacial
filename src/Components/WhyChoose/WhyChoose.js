import React from 'react'
import Card from 'react-bootstrap/Card'
import {Container, Row, Col} from 'react-bootstrap'
import './WhyChoose.css'
function WhyChoose() {
  return (
    <div>
<Container fluid className='why-choose'>
  <h1>WHY CHOOSE US?</h1>
<Row>
<Col md={4}>
<Card border="light" className='text-center'>
    <i className="far fa-check-circle"></i>
    <Card.Body>
      <Card.Title>Compreshensive Services</Card.Title>
      <Card.Text>
        We're your one-stop-shop for dentail care.
        <br></br>Whatever you're experiencing, we have 
        <br></br>the experience, technology, and 
        <br></br>compassion to help reach your goals.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
<Col md={4}>
<Card border="light" className='text-center'>
    <i className="far fa-check-circle"></i>
    <Card.Body>
      <Card.Title>Care When You need it</Card.Title>
      <Card.Text>
        We offer same day care for when you're in 
       <br></br> pain or facing an emergency. Early 
       <br></br>morning and evening appointments are
       <br></br>availble to fit your busy schedule.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
  <Col md={4}>
  <Card border="light" className='text-center'>
    <i className="far fa-check-circle"></i>
    <Card.Body>
      <Card.Title >Your Confort, Our Priority</Card.Title>
      <Card.Text>
        Enjoy a relaxing office evironment,
        <br></br>welcoming team and sooting amenities.
        <br></br>Plus, we offer advanced sedation options
        <br></br>to ensure your confort and help those
        <br></br>with anxiety
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
</Row>
</Container>
    </div>
  )
}

export default WhyChoose