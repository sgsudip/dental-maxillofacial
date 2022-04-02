import React from 'react'
import './About.css';
const About = () => {
  return (
    <div>
<section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">About our Dental Clinic</div>
		<article className="postcard light green" style={{backgroundImage:'linear-gradient(to right, #C22ED0 , #5FFAE0)'}}>
				<img className="postcard__img" src="images/homebg1.jpg" alt="clinic" />

			<div className="postcard__text t-dark" style={{backgroundImage:'linear-gradient(to right, #C22ED0 , #5FFAE0)'}}>
				<h1 className="postcard__title green">The Dental Maxillofacial clinic</h1>
				<div className="postcard__subtitle small">
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Dr. Hemant Gupta is a specialist in surgeries related to teeth, jaws, IMPLANTS and is an expert in root canal treatment (RCT). Dr. Swati Gupta is a specialist in restoring teeth (fixed and/removable)- Dentures, crowns, bridges,implants. Cleaning / bleaching of teeth, tooth coloured filling,laminated/ veneers, straightening of irregular teeth are few of the treatments done in the clinic. Both the doctors work by appointment. Same day dental treatment can be completed on appointment. The clinic is equipped with the best of the latest equipments. The latest addition in the clinic is intraoral scanner with chair side milling unit to deliver fully computerised crowns, bridges, implant restoration within an   hour."</div>
			</div>
		</article>
	</div>
</section>
    </div>
  )
}

export default About