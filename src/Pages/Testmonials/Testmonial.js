import React from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";
import test1 from "../../Assets/Images/testimo1.jpg";
import test2 from "../../Assets/Images/testimo2.jpg";
import group from "../../Assets/Images/Group.png";
import "./Testmonial.css";

function Testmonial() {
  return (
    <div className="testimonial_cont">
      <div>
        <h1 className="testimonial_heading">Patient Experiences</h1>
      </div>
      <div style={{margin:"0 15px 0 0"}}>
        <Carousel interval={1000}>
          <Carousel.Item style={{margin:"0 20px 0 20px"}}>
            <Row className="carousel_Cont">
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
                    src={test1}
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
                    padding:"25px"
                  }}
                >
                  <div>
                    {" "}
                    <Image className="img-fluid" src={group} alt="0.." />
                  </div>
                  <div>
                    <p className="testimo_subtex">
                      I had an exceptional experience with Sri Chaitanya. The
                      expert doctors provided me with personalized care, and the
                      friendly staff made me feel comfortable throughout. I'm
                      truly grateful for their dedicated service!
                    </p>
                  </div>
                  <div>
                    {" "}
                    <h2 className="testimo_headin">- Gopi Ch</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item sstyle={{margin:"0 20px 0 20px"}}>
            <Row className="carousel_Cont">
              <Col md={4}  >
                <div>
                  <Image
                    rounded
                    className="img-fluid"
                    style={{
                      height: "400px",
                      width: "400px",
                      objectFit: "cover",
                    }}
                    src={test2}
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
                    padding:"25px"
                  }}
                >
                  <div>
                    {" "}
                    <Image className="img-fluid" src={group} alt="00." />
                  </div>
                  <div>
                    {" "}
                    <p className="testimo_subtex">
                      I had an exceptional experience with Sri Chaitanya. The
                      expert doctors provided me with personalized care, and the
                      friendly staff made me feel comfortable throughout. I'm
                      truly grateful for their dedicated service!
                    </p>
                  </div>
                  <div>
                    <h2 className="testimo_headin">- Arun M</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Add more Carousel.Items for additional sets of cards */}
        </Carousel>
      </div>
    </div>
  );
}

export default Testmonial;
