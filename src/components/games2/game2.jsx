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
          position={null}>
          <div className="inline-block">
            <strong className="handle">
              <div className="s1">&#9769;</div>
            </strong>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119 239" width="119" height="239">
              <path id="Layer" fill= "#f0ad00" fill-rule="evenodd" class="s0" d="m118.9 0.7v237.7l-118.8-118.9z"/>
            </svg>
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
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 536" width="270" height="536">
              <path id="Layer" fill="#5a6378" fill-rule="evenodd" class="s0" d="m0 536.4v-535.8l267.9 267.9z"/>
            </svg>
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
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253 252" width="253" height="252">
              <path id="Layer" fill="#60b5cc" fill-rule="evenodd" class="s0" d="m0.9 0h252v252z"/>
            </svg>
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s4">&#9769;</div>
            </strong>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395 124" width="395" height="124">
              <path id="Layer copy" fill="#7fd13b" fill-rule="evenodd" class="s0" d="m270.8 0l123.4 123.4h-268.2l-123.5-123.4zm15.3 283.5l133.5 133.5 134.1-134.1-133.5-133.6z"/>
            </svg>
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s5">&#9769;</div>
            </strong>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269 269" width="269" height="269">
            <path id="Layer" fill="#7fd13b" fill-rule="evenodd" class="s0" d="m-14.2-148l123.4 123.4h-268.2l-123.5-123.4zm15.3 283.5l133.5 133.5 134.1-134.1-133.5-133.6z"/>
          </svg>
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s6">&#9769;</div>
            </strong>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 123" width="245" height="123">
              <path id="Layer" fill="#f0ad00" fill-rule="evenodd" class="s0" d="m-0.1 0.4h245.1l-122.5 122.5z"/>
            </svg>
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
        >
          <div className="inline-block">
            <strong className="handle">
              <div className="s7">&#9769;</div>
            </strong>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 272" width="544" height="272">
              <path id="Layer" fill="#60b5cc" fill-rule="evenodd" class="s0" d="m541.4 271.9h-535.8l267.9-267.9z"/>
            </svg>
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default Game2;