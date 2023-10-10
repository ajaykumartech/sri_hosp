import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Intro.css";

function Intro() {
  return (
    <Container className="intro_container">
      <Row>
        <Col>
          <h1 className="maintext_intro">Experienced and Up-to-Date</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <h1 className="subtext_intro">Since 1990</h1>
          <p className="subtext_text">
            We're a passionate team dedicated to guiding you towards a life of
            vitality and well-being. With a deep commitment to holistic health,
            we merge expert knowledge with a personalized approach to empower
            your journey.
          </p>
        </Col>
        <Col>
          <Row>
            <Col>
              <h1>10K+</h1>
              <p>Happy Patients</p>
            </Col>
            <Col>
              <h1>30K+</h1>
              <p>Years of Excellence</p>
            </Col>
          </Row>

          <Button className="intro_btn" variant="outline-dark">
            About Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
