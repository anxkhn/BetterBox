import React, { useState, useEffect } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import Image from "next/image";

// Paths to public directory
const betterboxSrc = "/betterbox.png";
const ambitionboxSrc = "/ambitionbox.png";

const SideBySide: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const duration = 3000; // Animation duration for one cycle in milliseconds
    const interval = 3; // Interval for updating the position in milliseconds
    const step = 100 / (duration / interval); // Amount of position change per step

    const animate = () => {
      setSliderPosition((prev) => {
        let newPos = prev + direction * step;
        if (newPos >= 100) {
          newPos = 100;
          setDirection(-1); // Change direction to backward
        } else if (newPos <= 0) {
          newPos = 0;
          setDirection(1); // Change direction to forward
        }
        return newPos;
      });
    };

    const animationInterval = setInterval(animate, interval);

    return () => clearInterval(animationInterval);
  }, [direction]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={ambitionboxSrc} alt="BetterBox" />}
        itemTwo={<ReactCompareSliderImage src={betterboxSrc} alt="AmbitionBox" />}
        position={sliderPosition} // Set slider position
      />
    </div>
  );
};

export default SideBySide;
