import React, { useEffect, useState } from "react";

import check from "../../Assets/Images/contact/contact1.jpg";
import hall from "../../Assets/Images/contact/contact2.jpg";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import "./Appointment.css";
import Footer from "../Footer/Footer";

function Appointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    specialty: "", // Set a default value
    message: "",
  });

  useEffect(() => {
    // This code will run when the component is mounted
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);
  // Handle form input changes
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any actions here, e.g., sending the data to a server
    console.log(formData); // Display the form data in the console
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      specialty: "",
      message: "",
    });
  };

  return (
    <>
      <div className="appointment_container">
        <h1 className="app_heading">Contact Us</h1>
        <div className="app_sub_p">
          <p className="app_text_p">
            Reach out to us today to schedule an appointment, inquire about our
            services, or simply get in touch. Our friendly team is here to
            assist you promptly.
          </p>
        </div>

        <Container>
          <Row style={{ padding: "12px" }}>
            <Col sm={12} md={6} style={{ margin: "0px" }}>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label className="label">First Name</Form.Label>
                    <Form.Control
                      className="Control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter First Name"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label className="label">Last Name</Form.Label>
                    <Form.Control
                      className="Control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Enter Last Name"
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label className="label">Phone</Form.Label>
                    <Form.Control
                      className="Control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="+91 "
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="label">E-mail</Form.Label>
                    <Form.Control
                      className="Control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label className="label">Date</Form.Label>
                    <Form.Control
                      className="Control"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      type="date"
                      placeholder="DD/MM/YYYY"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label className="label">Time</Form.Label>
                    <Form.Control
                      className="Control"
                      type="email"
                      placeholder="00:00 AM"
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Select
                      className="Control"
                      name="speciality"
                      value={formData.specialty}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="orthopaedics">orthopaedics</option>
                      <option value="opthalmology">opthalmology</option>
                      <option value="neurology">neurology</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridMessage">
                  <Form.Label className="label">Message</Form.Label>
                  <Form.Control
                    className="Control"
                    as="textarea"
                    rows={8}
                    placeholder="Type here..."
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{height:"300px"}}
                  />
                </Form.Group>
                <Button className="Control1" variant="dark" type="submit">
                  submit
                </Button>
              </Form>
            </Col>
            <Col
              style={{
                objectFit: "cover",
                height: "auto",
                overflow: "hidden",
                margin: "0px",
              }}
              sm={12}
              md={6}
            >
              <Image
                className="img-fluid"
                src={check}
                alt="contact"
                style={{ borderRadius: "32px" }}
              />
            </Col>
          </Row>
          <div className="app_card">
            <Row>
              <Col sm={12} md={8} style={{ padding: "69px" }}>
                <Row>
                    <Col>
                      <h1 className="app_addr_h">Contact Numbers</h1>
                      <p className="app_addr_p">08819 - 229585</p>
                      <p className="app_addr_p">08819 - 229586</p>
                    </Col>
                    <Col>
                      <h1 className="app_addr_h">Email</h1>
                      <p className="app_addr_p">Chaitanyaortho1989@gmail.com</p>
                    </Col>
                </Row>
                <Row>
                  <h1 className="app_addr_h">Address</h1>
                  <p className="app_addr_p">
                    Opp: S.M.V.M Polytechnic College, Vinnakota Vari Street,
                    Sajjapuram, Tanuku, West Godavari District, Andhra Pradesh -
                    534211
                  </p>
                </Row>
              </Col>
              <Col sm={12} md={4} style={{ padding: "69px" }}>
                <p>Google maps</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="hallimage-container">
        <Image src={hall} fluid className="centered-img" />
        <div className="centered-text">
          <h2 className="hall_text">Our Commitment to Quality</h2>
          <p className="hall_text_p">
            With a team of dedicated healthcare professionals, wellness experts,
            and passionate individuals, we are committed to providing top-tier
            services and resources that cater to your unique needs.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Appointment;
