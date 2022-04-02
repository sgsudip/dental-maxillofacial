import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function RootCanals() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>ROOT CANAL</h1>
      <p>Root canal treatment or endodontic treatment is necessary when the centre part within the tooth, known as the pulp, housing the blood vessels, nerves and living connective tissues, become infected or inflamed. The root canal procedure is performed to save a damaged or badly infected tooth, instead of extracting it.</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h2> What is RCT or Root Canal Treatment? </h2>
          <p><strong>O</strong>ur tooth has two main portions: the visible part or the portion of tooth we see in mouth is called crown and the invisible part or buried portion of tooth in the gums and underlying bone is called root of the tooth. Our tooth in the centre has a hollow space filled with soft pulp tissues which carries nerve fibres also. This central soft tissue is protected by an outer hard portion of tooth called dentin and enamel. The central soft pulp tissue communicates through underlying bone and nourishes the tooth. If this pulp tissue gets infected or traumatised by various reasons, the tooth becomes sensitive and painful. With time the pulp infection spreads in the underlying bone and may lead to pain on chewing or pressure, radiating pain in the jaw, face and head on the same side. Slowly this infection damages adjacent bone and forms granuloma, cyst or abscess and may infect adjacent healthy teeth. If untreated, ultimately the patient may lose the tooth. 
Root canal treatment aims to treat this infected pulp tissue by removing infected pulp and filling the canals with artificial filling materials and finally restoring the damaged portion of the tooth. An artificial crown is placed to restore the function, esthetics and physiology of the tooth.</p>
        </Col>
        <Col md={4}>
          <img src='images/rct1.jpg'></img>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <img src='images/rct2.jpg'></img>
        </Col>
        <Col md={7}>
          <h2>What Causes a Root Canal Infection? </h2>
          <p><strong>A </strong> root canal infection can occur for several reasons, though the basic root of the problem is always the penetration of bacteria into the pulp. Reasons for root canal infections are determined by the way the bacteria invades the tooth pulp. In this paragraph, we list the main causes of such an infection. The reasons for root canal infection include: 
<ul> <li>	Dental decay (caries) that allows bacteria to penetrate into the pulp and infect it.</li> 
<li>		A cracked or damaged tooth, which opens the way for bacteria.</li> 
<li>		An avulsed tooth that allows bacteria to penetrate into the pulp.</li> 
<li>		Various tooth displacements caused by extrusion, intrusion, or subluxation.</li> 
<li>		Sterile necrosis caused by tooth concussion (signs include tooth discoloration or highly calcified canals, which can be identified by x-ray). </li>
<li>		Tooth anatomy abnormality that allows bacteria to infect pulp tissue.</li> 
<li>	Repeated dental treatments on the same tooth. </li></ul>
According to our experience, the main reason for a root canal infection is the caries that damages the tooth and allows bacteria to access and infect the pulp. This is why it is important to timely identify and eliminate caries in order to prevent pulp infections.</p>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
          <h2>When Is a Root Canal Needed? </h2>
          <p><strong></strong>he need for root canal therapy can be effectively identified by a professional dentist; however, patients can also prepare themselves by taking specific characteristics into account. In this paragraph, we will cover the main symptoms that are evident and can indicate the necessity of a root canal. 
Symptoms Identifiable by Patients 
Only qualified dentists are able to determine the necessity of a root canal, using professional methods. The following symptoms of root canals, however, can also let patients know what they can expect from future dental treatments. 
<ul><li>	Pain; </li>
<li>	Swelling; </li>
<li>	Gum tenderness;</li> 
<li>	A general feeling of illness.</li></ul> 
Whether the patient is experiencing one or several of these symptoms, there is a likely a problem. Each characteristic has to be analyzed further, and in a detailed manner, in order to determine the necessity of a root canal. 
  
</p>
        </Col>
      <Col md={4}>
          <img src='images/rct3.jpg'></img>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  )
}

export default RootCanals