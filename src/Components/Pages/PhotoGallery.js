import React from 'react'
import Gallery from 'react-grid-gallery';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';

function PhotoGallery() {
    const IMAGES =
[{
        src: "images/homebg.jpg",
        thumbnail: "images/homebg.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "images/homebg1.jpg",
        thumbnail: "images/homebg1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Maxillofacial", title: "Clinic"}, {value: "Maxillofacial", title: "axillofacial"}],
        
},

{
        src: "images/homebg2.jpg",
        thumbnail: "images/homebg2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Maxillofacial", title: "Clinic"}, {value: "Maxillofacial", title: "axillofacial"}],
},
{
    src: "images/homebg3.jpg",
    thumbnail: "images/homebg3.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Maxillofacial", title: "Clinic"}, {value: "Maxillofacial", title: "axillofacial"}],
}

]
  return (
      <>
    <Container style={{marginTop:'15rem'}}> 
      <h1 className='mt-3 mb-3 text-center'>OUR PHOTO GALLERY</h1>
      <Gallery images={IMAGES}/> 
        </Container>
    <div>
   
   
    
    
  
   
    </div>
    <div className='container-fluid' style={{marginTop:'25rem'}}>
    <Footer/>
    </div>
    </>
  )
}


export default PhotoGallery