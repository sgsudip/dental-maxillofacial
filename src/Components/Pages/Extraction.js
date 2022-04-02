import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import './Style.css'

function Extraction() {
  return (
    <>
    <div className='general-container container-fluid'>
      <div className='overlay'>
      <h1>EXTRACTION</h1>
      <p>A baby tooth extraction, or pediatric tooth extraction, is the surgical removal of a primary tooth. A child's tooth may require extraction if it is severely damaged from an injury or decay. These procedures are very common among children.


</p>
      </div>
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
        <h2>What are Tooth Extraction?</h2>
          <p><strong>A</strong> baby tooth extraction, or pediatric tooth extraction, is the surgical removal of a primary tooth. A child's tooth may require extraction if it is severely damaged from an injury or decay. These procedures are very common among children.
Baby molars are the most common extractions because they are more prone to cavities than front teeth. However, front tooth extractions are simpler procedures because they only have one root, rather than multiple roots.
          </p>
          </Col>
          <Col md={4}>
          <img src='images/kids.jpg' alt='inlays'></img>
        </Col>
          </Row>
          <Row>
          <Col md={4}>
          <img src='images/io.jpg' alt='inlays'></img>
        </Col>
        <Col md={7}>
          <h2>How do I know if my child needs a tooth extracted?
</h2>
          <p><strong>I</strong>f the tooth is affected by extensive trauma or decay/ disease that is too bad to repair, the dentist may recommend extraction. They will also discuss options such as tooth implants if the tooth needs to be replaced.
If your child’s mouth is crowded, this may impact on other teeth erupting or on the alignment of their other teeth, so your dentist may extract a tooth to give the new teeth room to come through. It may also be necessary to remove a tooth before starting orthodontics to give the teeth room to align.
</p>
        </Col>
          </Row>
          <Row>
        <Col md={7}>
        <h2>How is the tooth extracted?</h2>
          <p><strong>A</strong>he extraction will depend on the severity of the situation. In most cases, your child’s dentist will numb the area where the tooth will be removed using a local anaesthetic then extract the tooth using forceps. The dentist will pack a gauze pad into the tooth socket to stop bleeding and help the blood clot, and may place a few stitches to close the gum over.
If your child is having more than one tooth removed or if the tooth is impacted, such as wisdom teeth, the oral surgeon may use a general anaesthetic. If the tooth is impacted, the dental surgeon will cut away gum and bone tissue covering the tooth, and may need to remove the tooth in pieces.
          </p>
          </Col>
          <Col md={4}>
          <img src='images/kids.jpg' alt='inlays'></img>
        </Col>
          </Row>
          </Container>
          <Footer/>
          </>
  )
}

export default Extraction