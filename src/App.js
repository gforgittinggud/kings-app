import React from "react";
import "./App.css";
import Scrollbar from "./components/Scrollbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Scrollbar />
        <nav>
          <ul>
            <li>
              <a href="#/">KINGS CM</a>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <section id="section1" className="section">
          <h2>Section 1</h2>
          <p>Information about Section 1.</p>
        </section>
        <section id="section2" className="section">
          <h2>Section 2</h2>
          <p>Information about Section 2.</p>
        </section>
        <section id="section3" className="section">
          <h2>Section 3</h2>
          <p>Information about Section 3.</p>
        </section>
        <section id="section4" className="section">
          <h2>Section 4</h2>
          <p>Information about Section 4.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
