import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import from "../index.css"

export const Recommended = () => {
  return (
    <div className="storiesSection">
    <Container>
      <Row className="storiesText">
        <Col xs={10} sm={10}  md={6} lg={6} className="storiesTitle">
        <h1>STORIES<br />ABOUT HOPE</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. <br />
          <span className= "rediectLink">Read more >></span>
          </p>

        </Col>
        <Col xs={10} sm={10}  md={6} lg={6} className="two">
          <img
            className="halfFullImage"
            src="https://i.ibb.co/xmsJbZt/Stories-Image.png"
            alt="Stories about hope"
          />
        </Col>
      </Row>
    </Container>
    </div>

  );
};



// <div className="storiesSection">
//     <Container>
//       <Row className="storiesText">
//         <Col xs={10} sm={10}  md={6} lg={6} className="storiesTitle">
//         <h1>STORIES<br />ABOUT HOPE</h1>
//           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. <br />
//           <span className= "rediectLink">Read more >></span>
//           </p>

//         </Col>
//         <Col xs={10} sm={10}  md={6} lg={6} className="two">
//           <img
//             className="halfFullImage"
//             src="https://i.ibb.co/xmsJbZt/Stories-Image.png"
//             alt="Stories about hope"
//           />
//         </Col>
//       </Row>
//     </Container>
//     </div>



// <div className="w-75">
// <Row className="recommendedPost">
//   <Col>
//       <img
//         className="recommendedImage"
//         src="https://i.ibb.co/170vYHW/You-might-also-like-2.jpg"
//         alt="recommended post"
//       />
//       <div className="postInfo">
//         <p>Amjad Ali</p>
//         <p>&nbsp;.&nbsp;</p>
//         <p>Mar 19, 2020</p>
//       </div>
//       <h4>How To Overcome Your Crises</h4>
//   </Col>

//   <Col>
//       <img
//         className="recommendedImage"
//         src="https://i.ibb.co/nM3Zb3N/You-might-also-like-1.jpg"
//         alt="recommended post"
//       />
//       <div className="postInfo">
//         <p>Receb Yaseen</p>
//         <p>&nbsp;.&nbsp;</p>
//         <p>Jan20, 2020 </p>
//       </div>
//       <h4>How Far You Enlarge Your Fears</h4>
//   </Col>
// </Row>
// </div>