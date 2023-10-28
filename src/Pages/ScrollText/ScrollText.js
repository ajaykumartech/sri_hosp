import React, { useEffect } from "react";
import check1 from "../../Assets/Images/check1.jpg";
import check2 from "../../Assets/Images/check2.jpg";
import check3 from "../../Assets/Images/check3.jpg";

import "./ScrollText.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function ScrollText() {
gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    // Create a GSAP timeline for the letter-by-letter color change animation
    const tl = gsap.timeline({
      scrollTrigger: {
        delay: 1,
        trigger: '.scroll_textCont', // Replace with the container element
        start: 'top center', // Adjust the start position as needed
        end: 'bottom center', // Adjust the end position as needed
        scrub: 1, // Smoothly scrub through the animation
      },
    });

    // Function to create a color animation for each letter
    const createLetterAnimations = (textElement, colors) => {
      const letters = textElement.textContent.split('');
      const letterSpans = letters.map((letter, index) => {
        const span = document.getElementsByClassName('scrollText');
        span.textContent = letter;
       
        return span;
      });

      // Add color animations for each letter
      letterSpans.forEach((span, index) => {
        tl.to(span, {
          color: colors[index % colors.length],
          duration: 0.5, // Duration of the color change animation for each letter
          start: `+=${index * 0.05}`, // Delay each letter slightly
        });
      });
    };

    // Apply color change animations to the text
    const textContainer = document.querySelector('.scroll_textCont'); // Replace with your container element
    createLetterAnimations(textContainer, ['#f3f4']); // Change to the desired colors

  
  }, []);


  return (
    <>
      <div className="scroll_textCont">
        <h1>
          <span className="scrollText">C</span>
          <span className="scrollText">A</span>
          <span className="scrollText">R</span>
          <span className="scrollText">E</span>
          <span className="scrollText">.</span>
          <span className="scrollText">{' '}</span>
          <span className="scrollText">T</span>
          <span className="scrollText">R</span>
          <span className="scrollText">U</span>
          <span className="scrollText">S</span>
          <span className="scrollText">T</span>
          <span className="scrollText">.</span>
          <span className="scrollText">{' '}</span>
          <span className="scrollText">H</span>
          <span className="scrollText">E</span>
          <span className="scrollText">A</span>
          <span className="scrollText">L</span>
          <span className="scrollText">T</span>
          <span className="scrollText">H</span>
          </h1>
      </div>
      <div>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent:"flex-start"
    }}
  >
    <div style={{ marginBottom: "0px" }}>
      <Image
        src={check1}
        rounded
        className="img-fluid"
        style={{
          height: "400px",
          width: "400px",
          objectFit: "cover",
        }}
      />
    </div>
    <div className="grid_2">
      <Image
        src={check2}
        rounded
        className="img-fluid"
        style={{
          height: "400px",
          width: "400px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center", // Center items horizontally
      justifyContent:"flex-start ",
      height:"386px"
    }}
  >
    <div className="grid_3">
      <Image
        src={check3}
        rounded
        className="img-fluid"
        style={{
          height: "400px",
          width: "400px",
          objectFit: "cover",
        }}
      />
    </div>
    <div className="test_cont">
      <p className="testimonial_p1">
        With an unwavering commitment to innovation and heartfelt compassion,
        we carve a unique path towards wellness.
      </p>
    </div>
  </div>
 
</div>
    </>
  );
}

export default ScrollText;
