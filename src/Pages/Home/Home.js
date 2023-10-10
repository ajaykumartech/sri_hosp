import React from "react";
import Header from "../Header/Header";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import dnalogo from "../../Assets/Images/muscleman.png";
import "./Home.css";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Doctors from "../Doctors/Doctors";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import Scroll from "../ScrollScreen/Scroll";
import ScrollText from "../ScrollText/ScrollText";
import Testmonial from "../Testmonials/Testmonial";

function Home() {
  return (
    <>
    <div className="main_container">
      <Row>
        <Header />
      </Row>
      <Container fluid>
        <Row>
          <Col md={8}>
            <div style={{padding:"100px 0 0 0"}}>
              <h1 className="main_heading">
                Compassionate Care, Exceptional Results
              </h1>
              <p className="main_text">
                Empowering You with Resilient Bones and Vision Clarity Beyond
                Limits
              </p>
              <Button className="main_Btn">Book an Appointment</Button>
            </div>
          </Col>
          <Col md={4}>
            <Image className="main_img" src={dnalogo} alt="dna" cover />
          </Col>
        </Row>
        <Row>
          <Contact />
        </Row>
         <Row>
          <Intro />
         </Row>
         <Row>
          <Services />
         </Row>
         <Doctors />
      </Container>
      <Facilities />
      
    </div>
    <Scroll />
    <ScrollText />
    
    <div className="main_container">
    <Testmonial />
    </div>
    
    <Footer />
    </>
  );
}

export default Home;
