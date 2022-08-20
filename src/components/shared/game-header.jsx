import React, { useState } from "react";
import ExitDialog from "./exit-dialog";
import ReloadDialog from "./reload-dialog";
import { useNavigate } from "react-router-dom";
import "./shared.scss";

function GameHeader(props) {
    const navigate = useNavigate();

  const reloadOk = () => {
    props.refreshPage();
  };
  const reloadClose = () => {};

  const exitOk = () => {
    navigate("/");
  };
  const exitClose = () => {};

  return (
    <div>
      <div className="main-section">
        <ReloadDialog eventClose={reloadClose} eventOk={reloadOk} />
        <span>
          <i className="bi bi-joystick"></i>
        </span>
        <ExitDialog eventClose={exitClose} eventOk={exitOk} />
      </div>
    </div>
  );
}

export default GameHeader;
