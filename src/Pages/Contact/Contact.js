import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import lord1 from "../../Assets/Images/locatioin_con.png";
import lord2 from "../../Assets/Images/timings_icon.png";
import lord3 from "../../Assets/Images/call_icon.png";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Row className="card_container">
        <Col md={4} >
          <Card className="card_contact">
          <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord1} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">Visit Us</h2>
              <div className="contact_content">
                <span>Opp: S.M.V.M Polytechnic College,</span>
                <span>Vinnukota Street, Sajjapuram</span>
                <span>Tanuku, Andhra Pradesh</span>
              </div>
              <p className="contact_link">View on google map</p>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card_contact">
            <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord3} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">Contact Us</h2>
              <div className="contact_content">
                <p>08819-234455</p>
                <p>08819-22456</p>
              </div>
              <label>E-mail:</label>
              <p className="contact_link">srichaitanyahospital@gmail.com</p>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card_contact">
          <Row className="icon_contact">
              <div className="img_back">
            <Image className="centeraed_imgs" src={lord2} alt='varun'/>
            </div>
            </Row>
            <Row className="contact_group">
              <h2 className="contact_h2">Working Hours</h2>
              <div className="contact_content">
                <p>Monday-Saturday</p>
                <p>9:00 AM - 2:00 PM</p>
                <p>5:00 PM - 7:00 PM</p>
              </div>
              <p className="contact_link">24/7 Emergency Services</p>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
