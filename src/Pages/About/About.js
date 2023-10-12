import React from "react";
import "./About.css";
import hosp from "../../Assets/Images/About/hospital.jpg";
import krish1 from "../../Assets/Images/About/krishnareddy1.jpg";
import krish2 from "../../Assets/Images/About/krishnareddy2.jpg";
import { Col, Image, Row } from "react-bootstrap";

function About() {
  return (
    <div className="about_container">
      <div className="about1_cont">
        <Row>
          <Col sm={12} md={8}>
            <h1 className="about_head1">We are Building Better Healthcare</h1>
          </Col>
          <Col>
            <p className="about1_text_p">
              At Sri Chaitanya Ortho & Eye Hospital, we envision a future where
              healthcare is not just about treating illness but also about
              promoting wellness. It is to be a trusted beacon of health and
              happiness, leading the way in compassionate care and patient
              empowerment.
            </p>
          </Col>
        </Row>
      </div>
      <div>
        <Image className="about_img_cont" src={hosp} fluid alt="hospital" />
      </div>
      <h1 className="about_head2">
        We hold the belief that this represents one of most crucial and
        formidable challenges
      </h1>
      <div className="about3_cont">
        <Row>
          <Col sm={12} md={6}>
            <Row>
              <Col sm={12} md={6}  className="image1_abt" style={{ display: 'flex', alignItems: 'flex-end' }}>
                <Image
                  src={krish2}
                  alt="Image 1"
                  
                  style={{ zIndex: 2,}} // Adjust the zIndex to control the image stacking
                />
              </Col>
              <Col sm={12} md={6} className="image2_abt">
                <Image
                  src={krish1}
                  alt="Image 2"
                  fluid
                  style={{ zIndex: 1 ,width:"500px"}} // Adjust the zIndex to control the image stacking
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <h1 className="about3_head">Who Are We</h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            >
              <div>
                <p className="about3_p_text">
                  Founded in 1990 by the visionary Dr. S. Krishna Reddy, a
                  pioneering figure in the medical field. His unwavering
                  dedication to providing exceptional healthcare services laid
                  the foundation for what would become a renowned institution.
                </p>
              </div>
              <div>
                <p className="about3_p_text">
                  Over the past three decades, Sri Chaitanya Ortho & Eye
                  Hospital has grown from its modest beginnings into a beacon of
                  hope and healing in the region. Dr. S. Krishna Reddy's
                  commitment to delivering compassionate care, coupled with a
                  relentless pursuit of excellence, set the hospital on a
                  trajectory of success.
                </p>
              </div>
              <div>
                <p className="about3_p_text">
                  Today, we proudly carry forward Dr. S. Krishna Reddy's legacy
                  under the capable leadership of Dr. S. Varun Reddy, a
                  dedicated Orthopaedic and visionary leader. Our journey has
                  been marked by continuous growth, evolution, and innovation as
                  we strive to meet the ever-evolving healthcare needs of our
                  community.
                </p>
              </div>
              <div>
                <p className="about3_p_text">
                  As we reflect on our journey, we are immensely proud of the
                  milestones we have achieved and the lives we have touched. Our
                  history is a testament to our commitment to excellence and our
                  dedication to providing healthcare that goes beyond
                  treatment—it's about fostering wellness and inspiring hope.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="about4_cont">
         <Row>
          <Col>
           <h1 className="about_head1">Elements that Form Our Hospital</h1>
          </Col>
          <Col>
          
          </Col>
         </Row>
      </div>
    </div>
  );
}

export default About;
