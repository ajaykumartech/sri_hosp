import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel, Col, Image, Row } from "react-bootstrap";
import "./Facilities.css";
import icu from "../../Assets/Images/icu.jpg";
import waiting from "../../Assets/Images/waitinghall.jpg";
import hospital from "../../Assets/Images/hospital.jpg";
import emergency from "../../Assets/Images/emergency.jpg";

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Facilities() {
  return (
    <div style={{ marginBottom: "280px" }}>
      <div>
        <h1 className="facilitiy_maintext">Our Facilities</h1>
      </div>
      <Carousel data-bs-theme="dark" interval={1000} controls={false} style={{margin:"5px 5px 0 0"}}>
        <Carousel.Item className="carousel_Cont">
          <Row>
            <Col md={4}>
              <div>
                <Image
                  rounded
                  className="img-fluid"
                  style={{
                    height: "400px",
                    width: "400px",
                    objectFit: "cover",
                  }}
                  src={waiting}
                  alt="emergency"
                />
              </div>
            </Col>
            <Col md={8} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  {" "}
                  <h2 className="facility_heading">Waiting Hall</h2>
                </div>

                <div>
                  <p className="facility_subtext">
                    Comfortable and roomy waiting hall, designed with your
                    well-being in mind with easy access to amenities.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="carousel_Cont">
          <Row >
            <Col md={4}>
              <div>
                <Image
                  rounded
                  className="img-fluid"
                  style={{
                    height: "400px",
                    width: "400px",
                    objectFit: "cover",
                  }}
                  src={icu}
                  alt="emergency"
                />
              </div>
            </Col>
            <Col md={8} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  <p className="facility_subtext">
                    Comfortable and roomy waiting hall, designed with your
                    well-being in mind with easy access to amenities.
                  </p>
                </div>
                <div>
                  {" "}
                  <h2 className="facility_heading">Operating Rooms (OR)</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="carousel_Cont">
          <Row >
            <Col md={4}>
              <div>
                <Image
                  rounded
                  className="img-fluid"
                  style={{
                    height: "400px",
                    width: "400px",
                    objectFit: "cover",
                  }}
                  src={hospital}
                  alt="emergency"
                />
              </div>
            </Col>
            <Col md={8} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  <p className="facility_subtext">
                    Pharmacy services offering a wide range of medications to
                    support your health and wellness needs.
                  </p>
                </div>
                <div>
                  {" "}
                  <h2 className="facility_heading">Pharmacy</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="carousel_Cont">
          <Row >
            <Col md={4}>
              <div>
                <Image
                  rounded
                  className="img-fluid"
                  style={{
                    height: "400px",
                    width: "400px",
                    objectFit: "cover",
                  }}
                  src={emergency}
                  alt="emergency"
                />
              </div>
            </Col>
            <Col md={8} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  <p className="facility_subtext">
                    Our Inpatient wards at provide a safe environment. Our
                    deadicated team is committed to delivering personalized
                    care.
                  </p>
                </div>
                <div>
                  {" "}
                  <h2 className="facility_heading">Inpatient Wards</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="carousel_Cont">
          <Row >
            <Col md={4}>
              <div>
                <Image
                  rounded
                  className="img-fluid"
                  style={{
                    height: "400px",
                    width: "400px",
                    objectFit: "cover",
                  }}
                  src={icu}
                  alt="emergency"
                />
              </div>
            </Col>
            <Col md={8} sm={12}>
              {" "}
              {/* Adjust the column size */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px",
                  padding: "25px",
                }}
              >
                <div>
                  <p className="facility_subtext">
                    Our Inpatient wards at provide a safe environment. Our
                    deadicated team is committed to delivering personalized
                    care.
                  </p>
                </div>
                <div>
                  {" "}
                  <h2 className="facility_heading">Emergency Care</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        {/* <Carousel.Item>
          <div className="sliding_container">
            <div className="card_cont">
            
              <div>
                <Image
                  className="centered_img"
                  style={{ width: "100%", height: "250px" }}
                  src={waiting}
                  alt="emergency"
                />
              </div>
              <div>
                <h2 className="facility_heading">Waiting Hall</h2>
                <p className="facility_subtext">
                  Comfortable and roomy waiting hall, designed with your
                  well-being in mind with easy access to amenities.
                </p>
              </div>
             
            </div>
            <div className="card_cont">
              <div>
                <Image
                  className="centered_img"
                  style={{ width: "100%", height: "250px" }}
                  src={emergency}
                  alt="emergency"
                />
              </div>
              <div>
                <h2 className="facility_heading">Operating Rooms (OR)</h2>
                <p className="facility_subtext">
                  Equipped with advanced technology, ensuring a safe and
                  efficient environment for surgical procedures.
                </p>
              </div>
            </div>
            <div className="card_cont">
              <div>
                <Image
                  className="centered_img"
                  style={{ width: "100%", height: "250px" }}
                  src={emergency}
                  alt="emergency"
                />
              </div>
              <div>
                <h2 className="facility_heading">Inpatient Wards</h2>
                <p className="facility_subtext">
                  Our Inpatient wards at provide a safe environment. Our
                  deadicated team is committed to delivering personalized care.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item> */}

        {/* Add more Carousel.Items for additional sets of cards */}
      </Carousel>
    </div>
  );
}

export default Facilities;
