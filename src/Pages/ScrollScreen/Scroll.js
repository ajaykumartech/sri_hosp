import React from "react";
import "./Scroll.css";
import { Col, Image, Row } from "react-bootstrap";
import lady from "../../Assets/Images/ladypatient.jpg";
import ladyorthodoc from "../../Assets/Images/ladyorthodoc.jpg";
import ladynurse from "../../Assets/Images/ladynurse.jpg";
import "./Scroll.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

function Scroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Select all screen divs
    let sections = gsap.utils.toArray(".screen1");
    let containers = document.querySelector('.scroll');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".containers",
        start: "top top",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${containers.offsetWidth}`,
        markers: "true"
      },
    })
  
  }, []);
  return (
    <div className="scroll">
      <div className="containers">
        {/* screen1 */}
        <div className="screen screen1">
          <Row className="image_card_scroll">
            <Col sm={12} md={5}>
              <div>
                <p className="scroll_p">What Makes Us Special</p>
                <h1 className="scroll_head">Patient Care</h1>
                <p className="scroll_sub">
                  We prioritize your well-being and unique needs, ensuring a
                  personalized healthcare experience.
                </p>
              </div>
            </Col>
            <Col md={7} sm={12}>
              <Image
                rounded
                className="centered_img"
                src={lady}
                alt="lady_patient"
              />
            </Col>
          </Row>
        </div>

        {/* screen12 */}
        <div className="screen screen2">
          <Row className="image_card_scroll">
            <Col sm={12} md={5}>
              <div>
                <p className="scroll_p">What Makes Us Special</p>
                <h1 className="scroll_head">Quality Support</h1>
                <p className="scroll_sub">
                  We maintain the highest medical standards, providing you with
                  exceptional care and peace of mind.
                </p>
              </div>
            </Col>
            <Col md={7} sm={12}>
              <Image
                rounded
                className="centered_img"
                src={ladyorthodoc}
                alt="lady_patient"
              />
            </Col>
          </Row>
        </div>

        {/* screen3 */}
        <div className="screen screen3">
          <Row className="image_card_scroll">
            <Col sm={12} md={5}>
              <div>
                <p className="scroll_p">What Makes Us Special</p>
                <h1 className="scroll_head">24/7 Nurse Staff</h1>
                <p className="scroll_sub">
                  Our dedicated nursing team is always here, around the clock,
                  to provide continuous care and suppor
                </p>
              </div>
            </Col>
            <Col md={7} sm={12}>
              <Image
                rounded
                className="centered_img"
                src={ladynurse}
                alt="lady_patient"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
