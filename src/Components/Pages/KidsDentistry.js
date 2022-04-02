import React from 'react'
import './Style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'



function KidsDentitry() {
  return (
    <>
    <div className='general-container container-fluid'>
    <h1>KIDS DENTISTRY</h1>
    <p>Children are not just small adults. They are not always able to be patient and cooperative during a dental exam. Pediatric dentists know how to examine and treat children in ways that make them comfortable. In addition, pediatric dentists use specially designed equipment in offices that are arranged and decorated with children in mind.

</p>
<Link to='/Book-online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div> 
    </div>
<Container className='general-content'>
<Row>
  <Col md={7} >
    <h2>What is a Pediatric/kids Dentist? </h2>
    <p><strong>P</strong>ediatric dentists are dedicated to the oral health of children from infancy through the teen years. They have the experience and qualifications to care for a child’s teeth, gums, and mouth throughout the various stages of childhood.
Children begin to get their baby-teeth during the first 6 months of life. By age 6 or 7 years, they start to lose their first set of teeth, which eventually are replaced by secondary, permanent teeth. 
Without proper dental care, children face possible oral decay ​and disease that can cause a lifetime of pain and complications.</p>
  </Col>
  <Col md={4}>
    <img src='images/kids.jpg' alt='General dentistry'></img>
  </Col>
</Row>
<h3>Here are a few of the Emergencies procedures they offer :</h3>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/kids.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Tooth colored fillings for kids
      </Card.Title>
      <Card.Text>
      With tooth colored fillings for kids, commonly known as composite fillings, modern dentistry has made it feasible to treat cavities discreetly. 
      </Card.Text>
      <Link to='/tooth-color-filling-of-teeth'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/kids.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      sealants
      </Card.Title>
      <Card.Text>
      sealants   are thin, plastic coatings painted on the chewing surfaces of the teeth. While they are not substitutes for daily brushing and flossing, dental sealants can prevent cavities from forming
      </Card.Text>
     <Link to='/kids-sealant'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/dc.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Cleaning & Prevention
      </Card.Title>
      <Card.Text>
      Keeping a regular preventative maintenance schedule with your child’s hygienist and dentist at Care for Kids Pediatric Dentistry helps you prevent not only tooth decay and periodontal disease but also avoid costly procedures and extra time in the hygiene chair.

      </Card.Text>
      <Link to='/kids-dentist-teeth-cleaning'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/di.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Tooth Extractions
      </Card.Title>
      <Card.Text>
      A baby tooth extraction, or pediatric tooth extraction, is the surgical removal of a primary tooth. A child's tooth may require extraction if it is severely damaged from an injury or decay. 
      </Card.Text>
      <Link to='/kids-tooth-extraction'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/db.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Emergency Dental Care for Children 

      </Card.Title>
      <Card.Text>
      Although dental injuries and dental emergencies are often distressing for both children and parents, they are also extremely common. 
      </Card.Text>
      <Link to='/Emergencies-of-kids'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
</Container>

<Footer />
  </>
  )
}

export default KidsDentitry