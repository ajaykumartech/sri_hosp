import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";
import insta from "../../Assets/Images/insta.png";
import watsapp from "../../Assets/Images/watsapp.png";
import fb from "../../Assets/Images/fb.png";
import arrow from "../../Assets/Images/arrow.png";
import email from "../../Assets/Images/email.png";
import phone from "../../Assets/Images/phone.png";

function Footer() {
  return (
    <div className="footer_container">
      <Container fluid>
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h3 className="get_toch">Get in Touch</h3>{" "}
              <span>
                <Image className="arrow_img" src={arrow} />
              </span>
            </div>
          </Col>
          <Col style={{ alignItems: "flex-end" }}>
            <Row>
              <Col></Col>
              <Col>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Image style={{ marginTop: "70px" }} src={fb} alt="fb" />
                  </div>
                  <div>
                    <Image
                      style={{ marginTop: "70px" }}
                      src={insta}
                      alt="insta"
                    />
                  </div>
                  <div>
                    <Image
                      style={{ marginTop: "70px" }}
                      src={watsapp}
                      alt="watsapp"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="footer_downcontainer">
          <Col>
            <div>
              <h3 className="footer_subtext">
                Sri Chaitanya Ortho & Eye Hospital
              </h3>
              <p id="p">Opp: S.M.V.M Polytechnic College,</p>
              <p id="p">
                <p id="p">Vinnukota Street, Sajjapuram</p>
              </p>
              <p id="p">Tanuku, Andhra pradesh</p>
            </div>
          </Col>
          <Col>
            <Row>
              <Col></Col>
              <Col>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "23px",
                      height: "32px",
                      marginRight: "10px",
                    }}
                  >
                    <Image src={phone} alt="WhatsApp" />
                  </div>
                  <div>
                    <p id="p">08819-224455</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "23px",
                      height: "23px",
                      marginRight: "10px",
                    }}
                  ></div>
                  <div>
                    {" "}
                    <p id="p"> 08819-224456</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "23px",
                      height: "23px",
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    <Image src={email} alt="Email" />
                  </div>
                  <div>
                    {" "}
                    <p id="p">srichaitanyahospital@gmail.com</p>
                  </div>
                </div>

                <p id="p1">@2023 All Rights Reserved</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
