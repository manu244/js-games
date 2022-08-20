import React from "react";
import Draggable from "react-draggable";
import GameHeader from "../shared/game-header";
import InstructionDialog from "../shared/instruction-dialog";
import "./game1.css";

function Game1(props) {
  const eventCancel = () => {

  };
  const eventOk = () => {

  };

  return (
    <div>
      <InstructionDialog
        eventCancel={eventCancel}
        eventOk={eventOk}
        body="Make Square using these blocks">
      </InstructionDialog>
      <GameHeader />
      <div className="sub-section">
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 105, y: 112 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s1">&#9769;</div>
            </strong>
            <img src="./images/square/s1.png" alt="img" className="img" />
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 150, y: 0 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s2">&#9769;</div>
            </strong>
            <img src="./images/square/s2.png" alt="img" className="img" />
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 8, y: 356 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s3">&#9769;</div>
            </strong>
            <img src="./images/square/s3.png" alt="img" className="img" />
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 151, y: 287 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s4">&#9769;</div>
            </strong>
            <img src="./images/square/s4.png" alt="img" className="img" />
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 8, y: 0 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s5">&#9769;</div>
            </strong>
            <img src="./images/square/s5.png" alt="img" className="img" />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default Game1;
