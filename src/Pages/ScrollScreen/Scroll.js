import React, { useEffect, useRef } from "react";
import { Col, Image, Row } from "react-bootstrap";
import lady from "../../Assets/Images/ladypatient.jpg";
import ladyorthodoc from "../../Assets/Images/ladyorthodoc.jpg";
import ladynurse from "../../Assets/Images/ladynurse.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./Scroll.css";

function Scroll() {
  const scrollContainer = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Select all screen divs
    const sections = scrollContainer.current.querySelectorAll(".screena");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${sections.length * 100}%`, // Adjust this value as needed
      },
    });

    sections.forEach((section, index) => {
      tl.to(section, {
        xPercent: -100 * index,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });

      tl.kill();
      tl.clear();
    };
  }, []);


  return (
    <div className="containers" ref={scrollContainer}>
      {/* screen1 */}
      <section className="screena screen1">
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
      </section>

      {/* screen12 */}
      <section className="screena screen2">
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
      </section>

      {/* screen3 */}
      <section className="screena screen3">
        <Row className="image_card_scroll">
          <Col sm={12} md={5}>
            <div>
              <p className="scroll_p">What Makes Us Special</p>
              <h1 className="scroll_head">24/7 Nurse Staff</h1>
              <p className="scroll_sub">
                Our dedicated nursing team is always here, around the clock, to
                provide continuous care and suppor
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
      </section>
    </div>
  );
}

export default Scroll;
