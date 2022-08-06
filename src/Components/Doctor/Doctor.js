import React from 'react'
import './Doctor.css'
import { Container, Row, Col, Card ,Carousel} from 'react-bootstrap'
const Doctor = () => {
    
  return (
    <div className='doctor'>
        <h1>About Doctor</h1>
        <Carousel variant="dark" touch={true} pauseOnHover={true} interval={1000} pause={true}>
    <Carousel.Item>
        <Container className='doctor-conatiner'>
            <Card>
                <Row>
                    <Col md={5} className="doctor-wrapper">
                    <Card.Img variant="top" src="images/homebg1.jpg" />
                    </Col>
                    <Col md={7} className="doctor-wrapper">
                    <Card.Title>Dr. Hemant Gupta</Card.Title>
                    <Card.Text>
                        Dr Hemant is a specialist in oral and Maxillofacial surgery.
                        He is an alumni of King George's medical college, lucknow.
                        He is an expert in the implants and surgeries of the face and jaw.
                        Dr Hemant is ex consultant for the vivekanand polytechnic college and a professor and senior consultant at the BBD college of dental science.
                    </Card.Text>
                 
                    </Col>
                </Row>
            </Card>
        </Container>
        </Carousel.Item>
        <Carousel.Item>
        <Container className='doctor-conatiner'>
            <Card>
                <Row>
                    <Col md={5} className="doctor-wrapper">
                    <Card.Img variant="top" src="images/docdp.jpg" />
                    </Col>
                    <Col md={7} className="doctor-wrapper">
                    <Card.Title>Dr. SWATI GUPTA</Card.Title> 
                    <Card.Text>
                        Dr swati gupta is a BDS(gold medalist) and MDS(prosthodontics) from King george's medical college, lucknow.
                        She specialises in crown, bridge and dentures. Dr swati gupta is an ex senior resident(K.G.M.C). She is also a professor and senior consultant at the B.B.D college of dental science.
                    </Card.Text>
                
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