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



function Scroll() {
  gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

       // Create a GSAP timeline
  const tl = gsap.timeline();

  // Select all screen divs
  const screens = gsap.utils.toArray('.screen');

  // Iterate through the screens and create animations
  screens.forEach((screend, index) => {
    // Calculate the screen width based on the number of screens
    // const screenWidth = `${100 / screens.length}%`;

    // Calculate the animation duration and delay
    const duration = 1; // Animation duration in seconds
    const delay = 5; // Delay between each screen in seconds

    // Add animations to the timeline
    tl.fromTo(
      screend,
      {
        x: index === 0 ? '0%' : '100%', // Move each screen to the right initially
        opacity: 1, // Initially hidden
      },
      {
        x: 0 * (screend.length-1),
        opacity: 1,
        duration: duration,
        scrollTrigger: {
          trigger: screend,
          start: index === 0 ? 'top top' : 'top bottom', // Start the animation at the top of the screen if it's the first screen, otherwise start at the bottom
          end: "+=1000", // End at the bottom for the first screen, otherwise, end at the top
          scrub: 1, // Smoothly scrub through the animation
          toggleActions: 'play none none none',
          pin:'true',
          anticipatePin:1,
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.5, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          }, // Play animation on enter, pause on leave
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
