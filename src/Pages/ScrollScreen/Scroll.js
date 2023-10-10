import React from "react";
import "./Scroll.css";
import { Col, Image, Row } from "react-bootstrap";
import lady from "../../Assets/Images/ladypatient.jpg";
import ladyorthodoc from "../../Assets/Images/ladyorthodoc.jpg";
import ladynurse from "../../Assets/Images/ladynurse.jpg";
import "./Scroll.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Scroll() {
   
    useEffect(() => {
       // Create a GSAP timeline
  const tl = gsap.timeline();

  // Select all screen divs
  const screens = document.querySelectorAll('.screen');

  // Iterate through the screens and create animations
  screens.forEach((screen, index) => {
    // Calculate the screen width based on the number of screens
    const screenWidth = `${100 / screens.length}%`;

    // Calculate the animation duration and delay
    const duration = 1; // Animation duration in seconds
    const delay = 0.5; // Delay between each screen in seconds

    // Add animations to the timeline
    tl.fromTo(
      screen,
      {
        x: screenWidth, // Move each screen to the right initially
        opacity: 0, // Initially hidden
      },
      {
        x: '0%',
        opacity: 1,
        duration: duration,
        scrollTrigger: {
          trigger: screen,
          start: 'top right', // Adjust start position as needed
          end: 'bottom center', 
          yoyo: true,// Adjust end position as needed
          scrub: true, // Smoothly scrub through the animation
          toggleActions: 'play none none none', // Play animation on enter, pause on leave
        },
      },
      `-=${delay}` // Delay each animation by a specified time
    );
  });
}, []);
  return (
    <div>
      {/* screen1 */}
      <div className="screen screen1">
        <Row className="vh-100 justify-content-center align-items-center">
          <Col>
            <div>
              <p className="scroll_p">What Makes Us Special</p>
              <h1 className="scroll_head">Patient Care</h1>
              <p className="scroll_sub">
                We prioritize your well-being and unique needs, ensuring a
                personalized healthcare experience.
              </p>
            </div>
          </Col>
          <Col>
            <Image rounded className="img-fluid" src={lady} alt="lady_patient" />
          </Col>
        </Row>
      </div>

      {/* screen12 */}
      <div className="screen screen2">
        <Row className="vh-100 justify-content-center align-items-center">
          <Col>
            <div>
              <p className="scroll_p">What Makes Us Special</p>
              <h1 className="scroll_head">Quality Support</h1>
              <p className="scroll_sub">
                We maintain the highest medical standards, providing you with
                exceptional care and peace of mind.
              </p>
            </div>
          </Col>
          <Col>
            <Image rounded className="img-fluid" src={ladyorthodoc} alt="lady_patient" />
          </Col>
        </Row>
      </div>

      {/* screen3 */}
      <div className="screen screen3">
        <Row className="vh-100 justify-content-center align-items-center">
          <Col>
            <div>
              <p className="scroll_p">What Makes Us Special</p>
              <h1 className="scroll_head">24/7 Nurse Staff</h1>
              <p className="scroll_sub">
                Our dedicated nursing team is always here, around the clock, to
                provide continuous care and suppor
              </p>
            </div>
          </Col>
          <Col className="image_card">
            <Image rounded className="img-fluid" src={ladynurse} alt="lady_patient" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Scroll;
