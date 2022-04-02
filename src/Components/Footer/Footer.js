import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
<div className="mt-5 pt-5 pb-5 footer">
<div className="container">
  <div className="row">
    <div className="col-lg-3 col-xs-12 about-company">
      <h2>About Us</h2>
      <ul className="m-0 p-0">
          
          
          <li>- <Link to="/">About Clinic</Link></li>
          <li>- <Link to="/">About Doctor</Link></li>
          
        </ul>
      <p><a href="https://facebook.com"><i className="fab fa-facebook-square mr-1 mt-3"></i></a><a href="https://linkendin"><i className="fab fa-linkedin ms-2"></i></a><a href="https://linkendin"><i className="fab fa-instagram-square ms-2"></i></a></p>
        <img src='images/logon.png' alt='clinic logo'></img>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h3 className="mt-lg-0 mt-sm-3">Services</h3>
        <ul className="m-0 p-0">
          <li>- <Link to="/General">General Dentistry</Link></li>
          <li>- <Link to="/Cosmetic">Cosmetics</Link></li>
          <li>- <Link to="/Surgical">Surgical</Link></li>
          <li>- <Link to="/KidsDentistry">Kids Dentistry</Link></li>
        </ul>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h3 className="mt-lg-0 mt-sm-3">Galleries</h3>
        <ul className="m-0 p-0">
        <li>- <Link to="/photo-gallery">Photo Gallery</Link></li>
          <li>- <Link to="/videos-of-maxillofacial-clinic">Video Gallery</Link></li>
        </ul>
    </div>
    <div className="col-lg-3 col-xs-12 location">
      <h3 className="mt-lg-0 mt-sm-4">Contact Us</h3>
      <p><i className="fas fa-map-marked-alt"></i>1/705, Bypass Road,&nbsp;Vishal Khand, Gomti Nagar, Lucknow-226010</p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i> 0522-409731</p>
      <p><i className="fas fa-envelope mr-3"></i> care@maxillofacial.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-100">Designed and Seo By© <a  className='copyrightheading' href='https://softgenics.in'>SoftGenics</a></small></p>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer