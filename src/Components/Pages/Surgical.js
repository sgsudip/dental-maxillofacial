import React from 'react'
import './Style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Surgical() {
  return (
    <>
    <div className='general-container container-fluid'>
    <h1>SURGICAL</h1>
    <p>
    Surgical dentistry involves diagnosing and treating various oral health issues. Most procedures can be done on an outpatient basis and don’t require long downtime.

</p>
<Link to='/Book-online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div> 
    </div>
<Container className='general-content'>
<Row>
  <Col md={7} >
    <h2>What is surgical DENTISTRY? </h2>
    <p><strong>S</strong>urgical dentistry involves diagnosing and treating various oral health issues. Most procedures can be done on an outpatient basis and don’t require long downtime.One common example of dental surgery is tooth extraction. If you’re a potential candidate for dental surgery, your General Dentist may refer you to an oral surgeon.
Your dentist evaluates your condition and prepares an individualised treatment plan. Sometimes surgery is required not because of oral health diseases, but due to an accident or severe dental trauma.
Before proceeding with any surgery, your dentist walks you through the process and potential risks. Here at Happy Sapiens Dental, we talk about how we can make your experience more comfortable so you can receive the care you need with ease.

</p>
  </Col>
  <Col md={4}>
    <img src='images/surgery.jpg' alt='General dentistry'></img>
  </Col>
</Row>
<h3>Different types of dental surgeries :</h3>
<Row>
  <Col md={6}>
    <Card>
      <Card.Img variant="top" src='images/rct2.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      	Root canal therapy
      </Card.Title>
      <Card.Text>
      Root canal treatments are done to save natural teeth. The procedure can be completed in a single dental visit.
      </Card.Text>
      <Link to='/root-canal-therapy-of-teeth'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={6}>
    <Card>
      <Card.Img variant="top" src='images/dental.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Wisdom tooth extraction
      </Card.Title>
      <Card.Text>
      Wisdom tooth extraction is recommended if there’s not enough room to accommodate the tooth or teeth, which can lead to impaction and issues associated with it.
      </Card.Text>
     <Link to='/wisdom-tooth-extraction'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  </Row>
  <Row>
  <Col md={6}>
    <Card>
      <Card.Img variant="top" src='images/di.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental implants
      </Card.Title>
      <Card.Text>
      A dental implant offers a permanent solution to one or several missing teeth.

      </Card.Text>
      <Link to='/Dental-Implant-of-cosmetic-dentistry'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>


  <Col md={6}>
    <Card>
      <Card.Img variant="top" src='images/surgical.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      	Reconstructive procedures. 
      </Card.Title>
      <Card.Text>
      The mouth may require reconstructive surgery due to severe trauma. A person may sustain injuries on the cheek, lips, or tongue, or lose one or several teeth.
      </Card.Text>
      <Link to='/reconstructive-procedure-of-surgical-dentist'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  
</Row>
</Container>

<Footer />
  </>
  )
}  
  

export default Surgical