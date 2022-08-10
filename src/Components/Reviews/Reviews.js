import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './Reviews.css'
const Reviews = () => {

  return (
  <div className='testimonial-container' id="review">
      <h1>PATIENT REVIEWS</h1>
    <Carousel variant="dark">
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/ptreview1.jpg" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'#299AEF'}}>Raghvendra</span> Singh</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            </div>
            <i className="fas fa-quote-left"/>
            <Card.Text className='testimonial-container-description'>
            Best dental surgeon in Lucknow, got my tooth extraction done in a hassle free manner, very humble and skilled doctor will recommend anyone for same 😁
            </Card.Text>
            <i className="fas fa-quote-right" ></i>
        </Card.Body>
        </Card>
    </Carousel.Item>
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/ptreview2.jpg" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'##299AEF'}}>Chandra</span> Negi</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
            </div>
            <i className="fas fa-quote-left"/>
            <Card.Text className='testimonial-container-description'>
            One of the best doctors around got implant done from them and would surely recommend to visit... one stop solution for your tooth problems.
            </Card.Text>
            <i className="fas fa-quote-right" ></i>
        </Card.Body>
        </Card>
    </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Reviews