import React from "react";
import Draggable from "react-draggable";
import GameHeader from "../shared/game-header";
import InstructionDialog from "../shared/instruction-dialog";
import "./game2.css";

function Game2(props) {
  const eventCancel = () => {

  };
  const eventOk = () => {

  };

  return (
    <div>
      <InstructionDialog
        eventCancel={eventCancel}
        eventOk={eventOk}>
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
            <img src="./images/game2/g2s1.svg" alt="img" className="g2-img" />
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
            <img src="./images/game2/g2s2.svg" alt="img" className="g2-img" />
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
            <img src="./images/game2/g2s3.svg" alt="img" className="g2-img" />
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
            <img src="./images/game2/g2s4.svg" alt="img" className="g2-img" />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default Game2;
