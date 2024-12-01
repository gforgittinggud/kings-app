import React, { useEffect, useState } from "react";
import "../App.css";

function Scrollbar() {
  //   return <>hello</>;
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercentage =
        (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercent(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      //   window.addEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="progress-container"
      style={{
        height: "8px",
        width: "100%",
        backgroundColor: "light grey",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
      }}
    >
      <div
        className="progress-fill"
        style={{
          height: "100%",
          width: `${scrollPercent}%`,
        }}
      ></div>
    </div>
  );
}

export default Scrollbar;
