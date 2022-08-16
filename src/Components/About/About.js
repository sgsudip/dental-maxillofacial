import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">
            About our Dental Clinic
          </div>
          <article className="postcard light green">
            <img
              className="postcard__img"
              src="images/homebg1.jpg"
              alt="clinic"
            />

            <div className="postcard__text t-dark">
              <h1 className="postcard__title green">
                The Dental Maxillofacial clinic
              </h1>
              <div className="postcard__subtitle small"></div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                At The dental maxillofacial clinic we furnish dentistry with
                energy and eagerness. We are committed to offering our patients
                great dentistry in a minding and delicate way. We have joined
                extraordinary patient consideration with the most recent
                strategies in current dentistry to give the best dental
                experience to our patients. We give quality reasonable dental
                medicines to every single dental need. Our medicines cover a
                full range of oral social insurance from essential examination
                to finish grin makeovers. This incorporates Preventive
                Dentistry, Restorative Dentistry, and Cosmetic Dentistry. All
                medications are custom-fitted to address singular issues and to
                expand the grin, wellbeing, imperativeness, and magnificence of
                your teeth.
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
