import React from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";

import icu from "../../Assets/Images/final-pics/operation-theatre.JPG";
import waiting from "../../Assets/Images/final-pics/waiting-hall.JPG";
import pharmacy from "../../Assets/Images/final-pics/pharmacy.JPG";
import orroom from "../../Assets/Images/final-pics/orroom.JPG";
import ward from "../../Assets/Images/final-pics/inpatient-ward.JPG";
import "./Facilities.css";

function Facilities() {
  return (
    <div style={{ marginBottom: "280px" }}>
      <div>
        <h1 className="facilitiy_maintext">Our Facilities</h1>
      </div>
      <Carousel
        data-bs-theme="dark"
        interval={1000}
        controls={false}
        style={{ margin: "5px 5px 0 0" }}
      >
        <Carousel.Item className="carousel_Cont">
          <Row>
            <Col sm={12} md={5}>
              <div>
                <Image
                  rounded
                  fluid
                  className="img-fluid"
                  src={waiting}
                  alt="waiting hall at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
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
          <Row>
            <Col md={5} sm={12}>
              <div>
                <Image
                  fluid
                  rounded
                  className="img-fluid"
                  src={orroom}
                  alt="Operation theater at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
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
                  <h2 className="facility_heading">Operating Rooms (OR)</h2>
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
          <Row>
            <Col md={5} sm={12}>
              <div>
                <Image
                  rounded
                  fluid
                  className="img-fluid"
                  src={pharmacy}
                  alt="pharmacy at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
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
                  <h2 className="facility_heading">Pharmacy</h2>
                </div>
                <div>
                  <p className="facility_subtext">
                    Pharmacy services offering a wide range of medications to
                    support your health and wellness needs.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="carousel_Cont">
          <Row>
            <Col md={5}>
              <div>
                <Image
                  rounded
                  fluid
                  className="img-fluid"
                  src={ward}
                  alt="Ward rooms at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
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
                  <h2 className="facility_heading">Inpatient Wards</h2>
                </div>
                <div>
                  <p className="facility_subtext">
                    Our Inpatient wards at provide a safe environment. Our
                    deadicated team is committed to delivering personalized
                    care.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item className="carousel_Cont">
          <Row>
            <Col md={5}>
              <div>
                <Image
                  rounded
                  fluid
                  className="img-fluid"
                  src={icu}
                  alt="ICU at chaitanya hospitals"
                />
              </div>
            </Col>
            <Col md={7} sm={12}>
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
                  <h2 className="facility_heading">Emergency Care</h2>
                </div>
                <div>
                  <p className="facility_subtext">
                    Our Inpatient wards at provide a safe environment. Our
                    deadicated team is committed to delivering personalized
                    care.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Facilities;
