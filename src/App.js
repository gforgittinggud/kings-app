import React from "react";
import "./App.css";
import "./style-form.css";
import Scrollbar from "./components/Scrollbar";
import "./script.js";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Scrollbar />
        <nav>
          <ul>
            <li>
              <a href="#/">
                <img
                  src={require("./assets/KINGS-LOGO-TRANSPARENT.jpg")}
                  width="128px"
                  height="40px"
                  alt="Kings Logo"
                />
              </a>
            </li>
            <p>KINGS CM PTE LTD</p>
            {/* <li>
              <a href="#section1">Section 1</a>
            </li>
            <li>
              <a href="#section2">Section 2</a>
            </li>
            <li>
              <a href="#section3">Section 3</a>
            </li>
            <li>
              <a href="#section4">Section 4</a>
            </li> */}
          </ul>
        </nav>
      </header>

      <div className="content">
        <section id="section1" className="section">
          <h2>STEERING GEAR SYSTEMS</h2>
          <h2>ENGINE PROPULSION CONTROLS</h2>
          <p>Picture goes here</p>
        </section>
        <section id="section2" className="section">
          <h2>About Us</h2>
          <p>
            About Us We are a leading marine engineering company in Singapore
            specializing in engine propulsion control systems and steering gear
            systems. Since our establishment in 2017, we have been dedicated to
            delivering innovative solutions tailored to the needs of the
            maritime industry.
            <br></br>
            <br></br>
            Our team comprises highly skilled professionals, bringing over 20
            years of experience in marine engineering. This wealth of expertise
            enables us to provide reliable and efficient systems that enhance
            vessel performance and safety.
            <br></br>
            <br></br>
            We pride ourselves on our strong partnerships with various shipyards
            regionally, ensuring that our products meet stringent class rules
            and exceeds industry standards. Our commitment to quality and
            excellence has earned us a trusted reputation in the maritime
            sector.
            <br></br>
            <br></br>
            We are passionate about advancing marine technology and ensuring the
            highest levels of service for our clients. Whether you're looking
            for propulsion control systems or steering gear solutions, we are
            here to support your maritime endeavors with expertise and
            dedication.
          </p>
        </section>
        <section id="section-container-3-4" className="section">
          <section id="section3" className="section">
            <h2>Steering Gear System</h2>
            <p>
              Design and Plan approval by Class
              <br />
              <br />
              DP1/DP2 system
              <br />
              <br />
              Hydraulic Cylinders
              <br />
              <br />
              Hydraulic Power Units
              <br />
              <br />
              Rudder Tiller
              <br />
              <br />
              Alarm Fault Systems
              <br />
              <br />
              Click Here for brochure //Add brochure link
            </p>
            <br />
            <br />
            <img
              src={require("./assets/KINGS-LOGO-TRANSPARENT.jpg")}
              width="128px"
              height="48px"
              alt="Placeholder image"
            />{" "}
          </section>
          <section id="section4" className="section">
            <h2>Engine Control System</h2>
            <p>
              Up to 4 Stations
              <br />
              <br />
              Mechanical &/or Electric actuator
              <br />
              <br />
              Simple and easy to use actuator adjustment
              <br />
              <br />
              Robust CANBUS communication
              <br />
              <br />
              IP55 Ingres Protection
              <br />
              <br />
              ABS Product Design Approval
              <br />
              <br />
              Click Here for brochure //Add brochure link
            </p>
            <br />
            <br />
            <img
              src={require("./assets/KINGS-LOGO-TRANSPARENT.jpg")}
              width="128px"
              height="48px"
              alt="Placeholder image"
            />
          </section>
        </section>

        <section id="contact">
          <h1>
            <u className="contact-us">Contact Us</u>
          </h1>
          <br />
          <br />
          <div id="contact-card">
            <form id="contact-form" onSubmit={(event) => sendEmail(event)}>
              <p className="name">
                <input
                  name="name"
                  type="text"
                  className="feedback-input"
                  id="name"
                  placeholder="Name"
                />
              </p>

              <p className="email">
                <input
                  name="email"
                  type="email"
                  className="feedback-input"
                  id="email"
                  placeholder="Email"
                />
              </p>

              <p className="text">
                <textarea
                  name="text"
                  className="feedback-input"
                  id="text"
                  placeholder="Enter your enquiry here! Typical response within 2-3 working days."
                ></textarea>
              </p>
              <br />

              <div className="submit">
                <input type="submit" id="button-blue" />
              </div>
              <br />
              <p className="color: rgb(245, 245, 245)" id="error-message"></p>
              <p className="display: none" id="submitted"></p>
            </form>
          </div>
        </section>
      </div>

      <section className="App-footer">
        <div>
          <h2>
            <u>General Enquiries: </u>
          </h2>
          <ul>
            <li>Mr. Jerome</li> <li>jeromelim@kings.sg</li>
            <li>+65 8201 4028</li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <h2>
            <u>Engineering Enquiries:</u>{" "}
          </h2>
          <ul>
            <li>Mr. Terry</li> <li>terry@kings.sg</li>
            <li>+65 8881 8083</li>
          </ul>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16164.475010984108!2d103.6994762!3d1.3124211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da056c0c27146f%3A0x7d2023550a5d685e!2sKINGS%20CM%20PTE%20LTD!5e1!3m2!1sen!2ssg!4v1732456331307!5m2!1sen!2ssg"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

function sendEmail(e) {
  e.preventDefault();

  // console.log(token);
  const submitted = document.getElementById("submitted");
  if (submitted.textContent === "submitted") {
    alert("You have already submitted the Form.");
    return;
  }
  const msg = document.getElementById("error-message");
  if (msg === null) {
    msg.textContent = "";
  }
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("text").value;
  if (!name || !email || !text) {
    document.getElementById("error-message").textContent =
      "All fields are required.";
    return;
  }
  axios
    .post(`https://servernode345345.site/send-email`, {
      name: name,
      email: email,
      text: text,
    })
    .then((response) => {
      alert("Form submitted successfully!");
      document.getElementById("submitted").textContent = "submitted";
    })
    .catch((error) => {
      alert("An issue occured on the server, Please try again.");
    });
}

export default App;
