import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ServiceTop.css'
const ServiceTop = () => {
  return (
    <div>
        <Container className='servicetop'>
        <Row>
            <Col lg={3} className="servicetop-wrapper">
           <Link to="/General"> <Card className='card-container'>
            <i className="fas fa-tooth"></i>
                <Card.Body>
                    <Card.Title>GeneralDentistry</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Link to="/Cosmetic"><Card >
            <i className="fas fa-teeth"></i>
                <Card.Body>
                    <Card.Title>COSMETIC</Card.Title>

                </Card.Body>
                </Card></Link>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Link to="/Surgical"><Card >
            <i className="fas fa-teeth-open"></i>
                <Card.Body>
                 <Card.Title>SURGICAL</Card.Title>

                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Link to="/KidsDentistry"><Card >
            <i className="fas fa-stethoscope"></i>
                <Card.Body>
                    <Card.Title>KIDS DENTISTRY</Card.Title>
                </Card.Body>
                </Card></Link>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ServiceTop