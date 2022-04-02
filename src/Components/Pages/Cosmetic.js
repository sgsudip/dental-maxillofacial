import React from 'react'
import './Style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'


const Cosmetic = () => {
  return (
      <>
    <div className='general-container container-fluid'>
    <h1>COSMETIC</h1>
    <p>Cosmetic dentistry is generally used to refer to any dental work that improves the appearance (though not necessarily the functionality) of teeth, gums and/or bite. It primarily focuses on improvement in dental aesthetics in colour, position, shape, size, alignment and overall smile appearance. Many dentists refer to themselves as "cosmetic dentists" regardless of their specific education, specialty, training, and experience in this field. 

</p>
<Link to='/Book-online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div> 
    </div>
<Container className='general-content'>
<Row>
  <Col md={7} >
    <h2>What is COSMETIC DENTISTRY? </h2>
    <p><strong>G</strong>Cosmetic dentistry is generally used to refer to any dental work that improves the appearance of teeth, gums and/or bite. It primarily focuses on improvement in dental aesthetics in color, position, shape, size, alignment and overall smile appearance.</p>
  </Col>
  <Col md={4}>
    <img src='images/cosmetic.jpg' alt='General dentistry'></img>
  </Col>
</Row>
<h3>Here are a few of the cosmetic procedures they offer :</h3>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/tw.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      TEETH WHITENING 
      </Card.Title>
      <Card.Text>
      Teeth whitening is one of the most basic cosmetic dentistry procedures—as well as one of the least expensive. Over time, teeth can become stained from food, drinks, medications, or other habits like smoking. Many people turn to teeth whitening to make their smile brighter.
      </Card.Text>
      <Link to='/Teeth-Whitening-dentist'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/dv.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental Veneers
      </Card.Title>
      <Card.Text>
      Dental veneers are thin, white shells made from medical-grade porcelain, resin, or ceramic. They’re custom made for each patient to resemble their natural teeth.
      </Card.Text>
     <Link to='/Dental-veneer'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/dc.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental Crown
      </Card.Title>
      <Card.Text>
      A dental crown, also known as a dental cap, fits over a decayed or damaged tooth. These crowns can keep a weakened tooth from breaking or be used cosmetically to cover misshapen or severely discoloured teeth. 

      </Card.Text>
      <Link to='/Dental-crown'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/io.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Inlays and Onlays
      </Card.Title>
      <Card.Text>
      Inlays and onlays, also known as indirect fillings, are used when a tooth is too decayed to support a typical filling. These fillings are created in a dental laboratory and bonded in place by a cosmetic dentist.
      </Card.Text>
      <Link to='/inlays-onlays-cosmetic-treatment'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/di.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental Implants
      </Card.Title>
      <Card.Text>
      After severe tooth decay or tooth loss, dental implants are used to replace teeth. The cosmetic dentist first attaches a screw to the jaw to provide support. Then, the implant is inserted into the bone socket of the missing tooth. 
      </Card.Text>
      <Link to='/Dental-Implant-of-cosmetic-dentistry'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/db.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental Bonding
      </Card.Title>
      <Card.Text>
      For dental bonding, the cosmetic dentist applies a moldable resin to the tooth and hardens it with ultraviolet light. Then, they trim, shape, and polish the material to blend into the surface of the tooth. 

      </Card.Text>
      <Link to='/dental-bonding-of-teeth'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
</Container>

<Footer />
  </>
  )
}

export default Cosmetic