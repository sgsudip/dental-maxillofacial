import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function kidsEmergency() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>KIDS EMERGENCY</h1>
      <p>dental injuries and dental emergencies are often distressing for both children and parents, they are also extremely common.  Approximately one third of children have experienced some type of dental trauma, and more have experienced a dental emergency.

</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What are Emergency Dental Care for Children  ?</h2>
          <p><strong>A</strong>lthough dental injuries and dental emergencies are often distressing for both children and parents, they are also extremely common.  Approximately one third of children have experienced some type of dental trauma, and more have experienced a dental emergency.
There are two peak risk periods for dental trauma - the first being toddlerhood (18-40 months) when environmental exploration begins, and the second being the preadolescent/adolescent period, when sporting injuries become commonplace.
Detailed below are some of the most common childhood dental emergencies, in addition to helpful advice on how to deal with them.

          </p>
          </Col>
          <Col md={4}>
          <img src='images/kids.jpg' alt='inlays'></img>
        </Col>
          </Row>
          <Row>
          <Col md={4}>
          <img src='images/kids.jpg' alt='inlays'></img>
        </Col>
        <Col md={7}>
        <h2> Toothache </h2>
          <p><strong>T</strong>oothache is common in children of all ages and rarely occurs without cause.  Impacted food can cause discomfort in young children, and can be dislodged using a toothbrush, a clean finger, or dental floss.  If pain persists, contact the pediatric dentist.  Some common causes of toothache include: tooth fractures, tooth decay, tooth trauma, and wisdom teeth eruption (adolescence).
          </p>
          </Col>
          </Row>
          <Row>
        <Col md={7}>
        <h2>Dental avulsion (knocked-out tooth)</h2>
          <p><strong>I</strong>f a tooth has been knocked-out of the child’s mouth completely, it is important to contact the pediatric dentist immediately.  In general, pediatric dentists do not attempt to reimplant avulsed primary (baby) teeth, because the reimplantation procedure itself can cause damage to the tooth bud, and thereby damage the emerging permanent tooth.
Pediatric dentists always attempt to reimplant avulsed permanent teeth, unless the trauma has caused irreparable damage.  The reimplantation procedure is almost always more successful if it is performed within one hour of the avulsion, so time is of the essence!

          </p>
          </Col>
          <Col md={4}>
          <img src='images/kids.jpg' alt='kids'></img>
        </Col>
          </Row>
          </Container>
          <Footer/>
          </>
  )
}

export default kidsEmergency