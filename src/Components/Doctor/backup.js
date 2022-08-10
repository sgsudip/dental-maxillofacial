// import React from "react";
// import "./Doctor.css";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Carousel from "../Carousel/Carousel";

// const Doctor = () => {
//   const items = [
//     {
//       title: "Dr Hemant Gupta",
//       description: `Dr Hemant is a specialist in oral and Maxillofacial
//       surgery. He is an alumni of King George's medical college,
//       lucknow. He is an expert in the implants and surgeries of
//       the face and jaw. Dr Hemant is ex consultant for the
//       vivekanand polytechnic college and a professor and senior
//       consultant at the BBD college of dental science.`,
//       "src":"images/homebg1.jpg"
//     },
//     {
//       title: "Dr Swati Gupta",
//       description: ` Dr swati gupta is a BDS(gold medalist) and
//     MDS(prosthodontics) from King george's medical college,
//     lucknow. She specialises in crown, bridge and dentures. Dr
//     swati gupta is an ex senior resident(K.G.M.C). She is also a
//     professor and senior consultant at the B.B.D college of
//     dental science.`,
//     "src":"images/docdp.jpg"
//     },
//   ];
//   const setting = {
//     dragSpeed: 1.25,
//     itemWidth: 300,
//     itemHeight: 180,
//     itemSideOffsets: 15,
//   };

//   const itemStyle = {
//     width: `${setting.itemWidth}px`,
//     height: `${setting.itemHeight}px`,
//     margin: `0px ${setting.itemSideOffsets}px`,
//   };

//   return (
//     <div className="doctor container">
//       <h1>About Doctor</h1>
//       <Carousel _data={items} {...setting}>
//         {items.map((item, index) => (
//           <div className="doctor-card">
//             <div className="doctor-card-container">
//               <div>
//                 <div>
//                   <div className="doctor-image-container">
//                     <image src={item.src} />
//                   </div>
//                   <div className="doctor-about-text">
//                     <p>{item.title}</p>
//                     <p>
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* <div>
//           <Container className="doctor-conatiner">
//             <Card>
//               <Row>
//                 <Col md={5} className="doctor-wrapper">
//                   <Card.Img variant="top" src="images/homebg1.jpg" />
//                 </Col>
//                 <Col md={7} className="doctor-wrapper">
//                   <Card.Title>Dr. Hemant Gupta</Card.Title>
//                   <Card.Text>
//                     Dr Hemant is a specialist in oral and Maxillofacial surgery.
//                     He is an alumni of King George's medical college, lucknow.
//                     He is an expert in the implants and surgeries of the face
//                     and jaw. Dr Hemant is ex consultant for the vivekanand
//                     polytechnic college and a professor and senior consultant at
//                     the BBD college of dental science.
//                   </Card.Text>
//                 </Col>
//               </Row>
//             </Card>
//           </Container>
//         </div>
//         <div>
//           <Container className="doctor-conatiner">
//             <Card>
//               <Row>
//                 <Col md={5} className="doctor-wrapper">
//                   <Card.Img variant="top" src="images/docdp.jpg" />
//                 </Col>
//                 <Col md={7} className="doctor-wrapper">
//                   <Card.Title>Dr. SWATI GUPTA</Card.Title>
//                   <Card.Text>
//                     Dr swati gupta is a BDS(gold medalist) and
//                     MDS(prosthodontics) from King george's medical college,
//                     lucknow. She specialises in crown, bridge and dentures. Dr
//                     swati gupta is an ex senior resident(K.G.M.C). She is also a
//                     professor and senior consultant at the B.B.D college of
//                     dental science.
//                   </Card.Text>
//                 </Col>
//               </Row>
//             </Card>
//           </Container>
//         </div> */}
//       </Carousel>
//     </div>
//   );
// };

// export default Doctor;
