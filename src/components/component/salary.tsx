import React, { useState, useEffect } from "react";

const SalaryComponent: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [blurIntensity, setBlurIntensity] = useState(0);

  const animateBlur = (targetBlur: number) => {
    const duration = 1000;
    const startBlur = blurIntensity;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = timestamp - startTime;
      const percentComplete = Math.min(progress / duration, 1);

      const currentBlur = startBlur + (targetBlur - startBlur) * percentComplete;
      setBlurIntensity(currentBlur);

      if (percentComplete < 1) {
        requestAnimationFrame(step);
      } else {
        setIsBlurred(targetBlur > 0);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const targetBlur = isBlurred ? 0 : 5;
      animateBlur(targetBlur);
    }, 1000);

    return () => clearInterval(interval);
  }, [isBlurred]);

  const styles = {
    body: {
      fontFamily: "proxima-nova, Arial, sans-serif",
      fontSize: "1rem",
      lineHeight: "1.5",
      margin: 0,
      padding: "20px", // Added padding
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "#ffffff", // Set background color to white
      borderRadius: "8px", // Rounded corners
      border: "1px solid #e0e0e0", // Small border line
    },
    rowLeftWrapper: {
      position: "relative",
      display: "flex",
    },
    rowLeft: {
      position: "relative",
    },
    bodyLarge: {
      fontWeight: 400,
      letterSpacing: "normal",
      color: "#1e223c",
    },
    rowLeftTitle: {
      color: "#1e223c",
      letterSpacing: "0.15px",
      lineHeight: "1.5rem",
    },
    boldDisplay: {
      fontWeight: 700,
      letterSpacing: "normal",
      color: "#1e223c",
      fontSize: "1.75rem",
      lineHeight: "1.43",
    },
    rowLeftSalary: {
      color: "#1e223c",
      lineHeight: "2.25rem",
      filter: `blur(${blurIntensity}px)`,
      transition: "filter 0.3s ease-out",
    },
    bodyMedium: {
      fontWeight: 400,
      letterSpacing: "normal",
      color: "#1e223c",
      fontSize: "0.875rem",
      lineHeight: "1.43",
    },
    rowLeftSalarySubtext: {
      color: "#5e6b92",
      letterSpacing: "0.25px",
      lineHeight: "1.25rem",
      marginBottom: "0.25rem",
    },
    ttWrapper: {
      display: "inline-block",
      position: "relative",
    },
    ttTooltip: {
      visibility: "hidden",
      width: "284px",
      backgroundColor: "#5e6b92",
      fontSize: "0.6875rem",
      fontWeight: 500,
      lineHeight: "1.64",
      textAlign: "center",
      borderRadius: "6px",
      padding: "11px 12px",
      position: "absolute",
      color: "#ebf0f6",
      zIndex: 201,
    },
    ttArrow: {
      position: "absolute",
      transform: "rotate(-180deg)",
      marginTop: 0,
      marginLeft: "-rem(5px)",
      borderWidth: "0.3125rem",
      borderStyle: "solid",
      borderColor: "#5e6b92 transparent transparent transparent",
    },
    ttText: {
      color: "inherit",
    },
    styleW4ca4: {
      top: "-65px",
      right: "-225%",
    },
    styleKCMV1: {
      bottom: "-10px",
      right: "40px",
      transform: "rotate(0)",
    },
    styleC3Isa: {
      borderRadius: "4px",
      background: "rgba(255, 255, 255, 0.4)",
      filter: `blur(${blurIntensity}px)`,
      userSelect: "none",
    },
    styleMCOUY: {
      borderRadius: "4px",
      background: "rgba(255, 255, 255, 0.4)",
      filter: `blur(${blurIntensity}px)`,
      userSelect: "none",
    },
  };

  return (
    <div style={styles.body}>
      <div className="row-left-wrapper snipcss-pQbok" style={styles.rowLeftWrapper}>
        <div className="row-left" style={styles.rowLeft}>
          <p className="row-left__title body-large" style={styles.bodyLarge}>
            Avg. annual salary <span className="row-left__title__subtext">(AmbitionBox Estimate)</span>
          </p>
          <div className="tt-wrapper" style={styles.ttWrapper}>
            <div className="tt-wrapper__tooltip style-w4ca4" id="style-w4ca4" style={styles.ttTooltip}>
              <div className="tt-wrapper__arrow style-KCMV1" id="style-KCMV1" style={styles.ttArrow}></div>
              <span className="tt-wrapper__text" style={styles.ttText}>
                This is an estimate of the average salary for this position. The actual salary may differ.
              </span>
            </div>
          </div>
          <p></p>
          <div className="row-left__salary bold-display" style={styles.boldDisplay}>
            ₹
            <span data-v-9c59b9ea="" className="style-c3Isa" style={styles.styleC3Isa}>
              21.5{" "}
            </span>{" "}
            Lakhs
          </div>
          <div className="row-left__salary-subtext body-medium" style={styles.bodyMedium}>
            <span data-v-9c59b9ea="" className="style-mCOUY" style={styles.styleMCOUY}>
              (₹16 L/yr - ₹22 L/yr){" "}
            </span>
          </div>
          <p style={{ filter: "blur(20px)" }}>Your betterbox bookmarklet worked!</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryComponent;
