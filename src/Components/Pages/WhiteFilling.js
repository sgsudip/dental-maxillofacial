import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'

import './Style.css'

function WhiteFilling() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>White Filling</h1>
      <p>Dental fillings are single or combinations of metals, plastics, glass or other materials used to repair or restore teeth. One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay – “a cavity.” Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse (such as from nail-biting or tooth grinding). 
      </p>
      </div>
      </div>
      <Container className='general-content'>
        <Row>
      <Col md={7} >
    <h2>What materials are dental fillings made from? </h2>
    <p><strong>D</strong>ental fillings are single or combinations of metals, plastics, glass or other materials used to repair or restore teeth. One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay – “a cavity.” Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse (such as from nail-biting or tooth grinding).</p>
    </Col>
<Col md={4}>
    <img src='images/dfill.jpg' alt='General dentistry'></img>
  </Col>
  </Row>
        <Row>
    <Col md={4}>
    <img src='images/fmat.jpg' alt='General dentistry'></img>
  </Col>
  <Col md={7} >
    <h2>What materials are dental fillings made from? </h2>
    <p><strong>D</strong>ental filling materials include: <ul>
<li>	Gold </li>
<li>Porcelain</li> 
<li>	Silver amalgam (contains mercury mixed with silver, tin, zinc, and copper).</li> 
<li>	Tooth-colored, plastic and glass materials called composite resin fillings. </li>
</ul></p>
  </Col>
</Row>
<Row>
  <Col md={7}>
    <h2>What steps are involved in filling a tooth? </h2>
    <p><strong>F</strong>irst, your dentist will numb the area around the tooth to be worked on with a local anaesthetic. Next, a drill, air abrasion instrument or laser will be used to remove the decayed area. The choice of instrument depends on your dentist's comfort level, training, and investment in the particular piece of equipment as well as location and extent of the decay. 
Next, your dentist will probe or test the area during the decay removal process to determine if all the decay has been removed. Once the decay has been removed, your dentist will prepare the space for the filling by cleaning the cavity of bacteria and debris. If the decay is near the root, your dentist may first put in a liner made of glass ionomer, composite resin, or other material to protect the nerve. Generally, after the filling is in, your dentist will finish and polish it. 
Several additional steps are required for tooth-colored fillings and are as follows. After your dentist has removed the decay and cleaned the area, the tooth-colored material is applied in layers. Next, a special light that “cures” or hardens each layer is applied. When the multilayering process is completed, your dentist will shape the composite material to the desired result, trim off any excess material and polish the final restoration.</p>
  </Col>
  <Col md={4}>
    <img src='images/tf.jpg' alt='WhiteFilling'></img>
  </Col>
</Row>

</Container>
<Footer/>
    
    </>
  )
}

export default WhiteFilling
