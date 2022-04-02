import React from 'react'
import './Doctor.css'
import { Container, Row, Col, Card ,Carousel} from 'react-bootstrap'
const Doctor = () => {
  return (
    <div className='doctor'>
        <h1>About Doctor</h1>
        <Carousel variant="dark">
    <Carousel.Item interval={1000} className>
        <Container className='doctor-conatiner'>
            <Card>
                <Row>
                    <Col md={5} className="doctor-wrapper">
                    <Card.Img variant="top" src="images/homebg1.jpg" />
                    </Col>
                    <Col md={7} className="doctor-wrapper">
                    <Card.Title>Dr. HEMANT GUPTA</Card.Title>
                    <Card.Text>ORAL & MAXILLOFACIAL SURGERY</Card.Text>
                    <Card.Text>KING GEOGES' MEDICAL COLLEGE, LUCKNOW</Card.Text>
                    <Card.Text>SPECIALIST INPLANTS & SURGRIES OF FACE & JAW</Card.Text>
                    <Card.Text>Ex.XONSULTANT, VIVEKANAND POLYCKINIC</Card.Text>
                    <Card.Text>PROFESSOR & SENIOR CONSULTANT</Card.Text>
                    <Card.Text>B.B.D COLLEGE OF DENTAL SCIENCE</Card.Text>
                    </Col>
                </Row>
            </Card>
        </Container>
        </Carousel.Item>
        <Carousel.Item interval={1000} className>
        <Container className='doctor-conatiner'>
            <Card>
                <Row>
                    <Col md={5} className="doctor-wrapper">
                    <Card.Img variant="top" src="images/docdp.jpg" />
                    </Col>
                    <Col md={7} className="doctor-wrapper">
                    <Card.Title>Dr. SWATI GUPTA</Card.Title>
                    <Card.Text>B.D.S (Gold Medalist), M.D.S</Card.Text>
                    <Card.Text>PROSTHODONTICS</Card.Text>
                    <Card.Text>KING GEOGES' MEDICAL COLLEGE, LUCKNOW</Card.Text>
                    <Card.Text>SPECIALIST IN CROWN, BRIDGE & DENTURE</Card.Text>
                    <Card.Text>Ex.SENIOR RESIDENT(K.G.M.C)</Card.Text>
                    <Card.Text>PROFESSOR & SENIOR CONSULTANT</Card.Text>
                    <Card.Text>B.B.D COLLEGE OF DENTAL SCIENCE</Card.Text>
                    </Col>
                </Row>
            </Card>
        </Container>
        </Carousel.Item>
        </Carousel>
        </div>
        
    
  )
}

export default Doctor