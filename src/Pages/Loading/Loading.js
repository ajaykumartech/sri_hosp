import React, { useState, useEffect } from "react";
import "./Loading.css";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import opta from "../../Assets/Images/eyeLoad.png";
import orto from "../../Assets/Images/OrthoLoad.png";
import neuro from "../../Assets/Images/neuroLoad.png";

function Loading() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const navigation = useNavigate();

  useEffect(() => {
    const transitionScreens = (screenNumber) => {
      // Set a maximum screen number, e.g., 4
      const maxScreenNumber = 6;

      // If the current screen number is less than the maximum
      if (screenNumber <= maxScreenNumber) {
        setCurrentScreen(screenNumber);
        console.log(screenNumber);
        setTimeout(() => {
          transitionScreens(screenNumber + 1); // Move to the next screen
        }, 2000); // Adjust the timeout duration as needed (2 seconds in this example)
      } else {
        navigation("/home"); // Navigate to the home page when done
      }
    };

    // Start the transition with the first screen
    transitionScreens(1);

    // Clean up when unmounting the component
    return () => {
      // Clear any remaining timeouts if needed
    };
  }, [navigation]);

  return (
    <div className="loading-container">
      {currentScreen === 1 && (
        <div className={`screens screens${currentScreen}`}>
          <div style={{ display: "flex", flexDirection: "row", gap: "26px" }}>
            <h2>Orthopaedics</h2>
            <Image src={orto} alt="Orthopaedic_logo" />
          </div>
        </div>
      )}
      {currentScreen === 2 && (
        <div className={`screens screens${currentScreen}`}>
          <div style={{ display: "flex", flexDirection: "row", gap: "26px" }}>
            <h2>Ophthalmology</h2>
            <Image src={opta} alt="Orthopaedic_logo" />
          </div>
        </div>
      )}
      {currentScreen === 3 && (
        <div className={`screens screens${currentScreen}`}>
          <div style={{ display: "flex", flexDirection: "row", gap: "26px" }}>
            <h2>Neurology</h2>
            <Image src={neuro} alt="Orthopaedic_logo" />
          </div>
        </div>
      )}
      {currentScreen === 4 && (
        <div className={`screens screens${currentScreen}`}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h2>and more...</h2>
          </div>
        </div>
      )}
      {currentScreen === 5 && (
        <div className={`screen screens${currentScreen}`}>
           <div style={{ display: "flex", flexDirection: "row" }}>
           
          </div>
        </div>
      )}
      {currentScreen === 6 && (
        <div className={`screens screens${currentScreen}`}>
           <div style={{ display: "flex", flexDirection: "column" }}>
            <h2> hello</h2>
            <Image src={neuro} alt="Orthopaedic_logo" />
          </div>
         
        </div>
      )}
    </div>
  );
}

export default Loading;
