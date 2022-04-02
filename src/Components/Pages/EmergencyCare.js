import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function EmergencyCare() {
  return (
    <>
    <div  className='general-container container-fluid'>
    <div className='overlay'>
      <h1>EMERGENCY CARE</h1>
      <p>A dental emergency is an issue involving the teeth and supporting tissues that is of high importance to be treated by the relevant professional. Pain can originate from the tooth, surrounding tissues or can have the sensation of originating in the teeth but be caused by an independent source (orofacial pain and toothache).</p>
      </div>
    </div>
    <Container className='general-content'>
        <Row>
      <Col md={7} >
        <h2>What Is Considered a Dental Emergency? </h2>
        <p><strong>W</strong>hen you’re dealing with a dental problem, your dentist should be your first call. But what if you encounter a problem on a holiday, weekend, or in the middle of the night? If you’re dealing with a severe dental problem outside normal office hours, you will likely need an emergency dentist or even an emergency room visit. 
</p>
      </Col>
      <Col md={4}>
    <img src='images/em.jpg' alt='General dentistry'></img>
  </Col>
      </Row>
      <Row>
      <Col md={4}>
    <img src='images/em1.jpg' alt='General dentistry'></img>
    <img src='images/em2.jpg' alt='General dentistry'></img>
    <img src='images/em3.jpg' alt='General dentistry'></img>
  </Col>
  <Col md={7}>
    <h2>What are some common Dental Emergencies ?</h2>
    <p><strong>I</strong>f you’re suffering from any of the following common dental emergencies, here’s what you need to know about caring for the problem until you can get to a dentist. 
<ol>
  <li>Unexplainable Toothache </li><p>Toothaches are not just a painful nuisance or something you should take lightly. They are a red flag and your body’s way of telling you that something is not right in your mouth. When you experience a sudden and unexplainable toothache, find a qualified emergency dentist to help diagnose and treat the issue. 
Try applying a cold compress, rinsing with salt water, or using over-the-counter pain medication to help alleviate the discomfort until you can get to your dentist. 
</p>
<li>Swollen or Bleeding Gums </li><p>Although occasional gum irritation is not a dental emergency, gums that won’t stop bleeding, especially if accompanied by pain and swelling, can indicate an underlying dental or health issue. It is not normal to experience bleeding gums without any obvious cause. See your dentist right away if you’re experiencing these symptoms. 
</p>
<li>Swollen Jaw or Mouth </li><p>It’s time for an emergency dentist visit for immediate treatment if your mouth or jaw suddenly becomes swollen for no apparent reason. You may have an infection, irritation to your lymph nodes, or some other factor that should be treated right away. 
</p>
<li>Exposed Nerves </li><p>Exposed nerves are an excruciating experience that will only get worse if you wait to see your dentist. To prevent infections, further nerve damage, or more extensive dental treatments down the road, seek emergency dental assistance as soon as possible. 
</p>
  </ol></p>
  </Col>
      </Row>

      </Container>
    <Footer/>
    </>
  )
}

export default EmergencyCare