import axios from "axios";
import React from "react";
import "./App.css";
import Scrollbar from "./components/Scrollbar";
import "./script.js";
import "./style-form.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Scrollbar />
        <nav>
          <ul>
            <li>
              <a href="#section1">
                <img
                  src={require("./assets/KINGS-LOGO-TRANSPARENT.jpg")}
                  width="128px"
                  height="40px"
                  alt="Kings Logo"
                />
              </a>
            </li>
            <a
              id="header-contact-us"
              className="text-header"
              href="#contact-us"
            >
              Contact Us
            </a>
          </ul>
        </nav>
      </header>

      <div className="content">
        <section id="section1" className="section">
          <h2 className="section-text-1">STEERING GEAR SYSTEMS</h2>
          <br></br>
          <br></br>
          <h2 className="section-text-1">ENGINE PROPULSION CONTROLS</h2>
        </section>
        <section id="section2" className="section">
          <h2>About Us</h2>
          <p>
            Kings CM is a leading marine engineering company in Singapore
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
              <h1>View the brochure below!</h1>
              <br />
              <a
                href="https://drive.google.com/file/d/1r9aUhvRCCizEJ1m_zA2ZfmHLP10tnkfD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Open PDF Externally
              </a>
              <br />
              <br />
              {/* <iframe
                className="iframe-pdf"
                src={require("./assets/KINGS Steering Brochure.pdf#page=4")}
                width="100%"
                height="820px"
              ></iframe> */}
              <br />
              <br />
            </p>
            <div id="img-formatter-section-3-4">
              <img
                src={require("./assets/KS81.png")}
                alt="KS81 SGS"
                height="400rem"
                width={"500rem"}
              />{" "}
            </div>
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
              <h1>View the brochure below!</h1>
              <br />
              <a
                href="https://drive.google.com/file/d/1wqSCH_TGhMYYKmRmI3XCyljYcf5xrFQF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Open PDF Externally
              </a>
              <br />
              <br />
              {/* <iframe
                className="iframe-pdf"
                src={require("./assets/KC200 Brochure 4.5.pdf#page=4")}
                width="100%"
                height="820px"
              ></iframe> */}
            </p>
            <br />
            <br />
            <div id="img-formatter-section-3-4">
              <img
                src={require("./assets/H200-Control-Head-1.png")}
                alt="H200 Control Head"
                height="400rem"
                width={"300rem"}
              />{" "}
            </div>
          </section>
        </section>

        <section id="contact">
          <h1>
            <u id="contact-us" className="contact-us">
              Contact Us
            </u>
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
          <div>
            <h2>
              <u className="text-footer">General Enquiries: </u>
            </h2>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                  color="white"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                &nbsp;&nbsp;Mr. Jerome
              </li>{" "}
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-at-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
                &nbsp;&nbsp;jeromelim@kings.sg
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-inbound-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"
                  />
                </svg>
                &nbsp;&nbsp;+65 8201 4028
              </li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h2>
              <u className="text-footer"> Engineering Enquiries:</u>{" "}
            </h2>
            <ul>
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                  color="white"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                &nbsp;&nbsp;Mr. Terry
              </li>{" "}
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-at-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
                &nbsp;&nbsp;terry@kings.sg
              </li>
              <li>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-inbound-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"
                  />
                </svg>
                &nbsp;&nbsp;+65 8881 8083
              </li>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </ul>
          </div>
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
