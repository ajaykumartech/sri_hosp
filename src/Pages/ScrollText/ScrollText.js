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
  useEffect(() => {
    // Create a GSAP timeline for the letter-by-letter color change animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll_textCont", // Replace with your container element
        start: "top 30%", // Adjust the start position as needed
        end: "bottom bottom", // Adjust the end position as needed
        scrub: true, // Smoothly scrub through the animation
      },
    });

    // Function to create a color animation for each letter
    const createLetterAnimations = (textElement, colors) => {
      const letters = textElement.textContent.split("");
      const letterSpans = letters.map((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        textElement.appendChild(span);
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
    const textContainer = document.querySelector(".scroll_textCont"); // Replace with your container element
    createLetterAnimations(textContainer, ["red", "blue", "green"]); // Change to the desired colors

    // Ensure to clean up ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
  return (
    <>
      <div className="scroll_textCont">
        <p className="scrollText">CARE. TRUST. HEALTH</p>
      </div>
      <div>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      margin:"0",
      justifyContent:"flex-start"
    }}
  >
    <div style={{ marginBottom: "20px" }}>
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
    <div style={{ marginBottom: "20px" }}>
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
      justifyContent:"space-evenly ",
      height:"386px"
    }}
  >
    <div style={{ marginBottom: "20px" }}>
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
    <div style={{width:"678px",  height:"386px"}}>
      <p className="testimonial_p">
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
