import React from "react";
import Draggable from "react-draggable";

export default function App() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "9px",
          backgroundColor: "#bd51ff",
          fontSize: "20px",
          color: "#fff",
        }}
      >
        Make Square using these blocks
      </div>
      <div style={{ height: "99.9vh", width: "100%", }}>
        {/* <div> */}
        <Draggable bounds="body">
          <img
            src="./images/square/s1.png"
            alt="img"
            style={{ position: "absolute",  paddingTop:'50px' }}
          />
        </Draggable>
        <Draggable bounds="body">
          <img
            src="./images/square/s2.png"
            alt="img"
            style={{ position: "absolute",  paddingTop:'50px' }}
          />
        </Draggable>
        <Draggable bounds="body">
          <img
            src="./images/square/s3.png"
            alt="img"
            style={{ position: "absolute",  paddingTop:'50px'  }}
          />
        </Draggable>
        <Draggable bounds="body">
          <img
            src="./images/square/s4.png"
            alt="img"
            style={{ position: "absolute",  paddingTop:'50px'  }}
          />
        </Draggable>
        <Draggable bounds="body">
          <img
            src="./images/square/s5.png"
            alt="img"
            style={{ position: "absolute",  paddingTop:'50px' }}
          />
        </Draggable>
        {/* </div> */}
      </div>
    </div>
  );
}
