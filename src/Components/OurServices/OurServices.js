import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './OurServices.css'
function OurServices() {
  return (
    <div>
        <Container fluid className='Ourservices'>
            <Container style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <br></br>
            <h1 className="text-center mt-3">SPECIALITY TREATMENT FOR</h1>
            <Row>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/implant.webp' />
                    <div class="overlay top-overlay">
                    <div class="text">DENTAL IMPLANTS</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/surgery.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">WISDOM TOOTH SURGERY</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/fractures.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">FRACTURES OF JAW & FACE</div>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/crown.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">CAD/CAM CROWN AND BRIDGE</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/denture.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">COMPLETE & PARTIAL DENTURE</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/rootcanal.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">ROOT CANAL TREATMENT</div>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/ortho.webp' />
                    <div class="overlay top-overlay">
                    <div class="text">ORTHODONTIC TREATMENT</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/smile.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">SMILE DESIGN/FULL MOUTH REHABILITATION</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div class="item animated wow fadeIn">
                    <Image src='images/laser.jpg' />
                    <div class="overlay top-overlay">
                    <div class="text">DENTAL LASER/BLEEDING & SWOLLEN GUMS</div>
                    </div>
                </div>
                </Col>
            </Row>
            </Container>
        </Container>
    </div>
  )
}

export default OurServices