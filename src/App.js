import React from "react";
import Draggable from "react-draggable";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="main-section">Make Square using these blocks</div>
      <div className="sub-section">
        <Draggable handle="strong">
        <div className="relative">
            <strong className="cursor">
              <div className="s1">&#9769;</div>
            </strong>
            <img src="./images/square/s1.png" alt="img" className="img" />
          </div>
        </Draggable>
        <Draggable handle="strong">
        <div className="relative">
            <strong className="cursor">
              <div className="s2">&#9769;</div>
            </strong>
            <img src="./images/square/s2.png" alt="img" className="img" />
          </div>
        </Draggable>
        <Draggable handle="strong">
        <div className="relative">
            <strong className="cursor">
              <div className="s3">&#9769;</div>
            </strong>
            <img src="./images/square/s3.png" alt="img" className="img" />
          </div>
        </Draggable>
        <Draggable handle="strong">
        <div className="relative">
            <strong className="cursor">
              <div className="s4">&#9769;</div>
            </strong>
            <img src="./images/square/s4.png" alt="img" className="img" />
          </div>
        </Draggable>
        <Draggable handle="strong">
          <div className="relative">
            <strong className="cursor">
              <div className="s5">&#9769;</div>
            </strong>
            <img src="./images/square/s5.png" alt="img" className="img" />
          </div>
        </Draggable>
      </div>
    </div>
  );
}
