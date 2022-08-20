import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./home.css";

function Home(props) {
  return (
    <Container className="blank-layout bg">
      <div>
        <div className="main-title">Mind Puzzle</div>
        <div className="logo"><i className="bi bi-joystick"></i></div>
      </div>
      <div className=" ">
        <Row className="justify-content-around my-3">

          <Card border="primary" style={{ width: "8rem" }} >
            <div className="header text-primary">Level 1</div>
            <Card.Body>
              <Card.Title>
                <i className="bi bi-box font-size-40 link-primary"></i>
              </Card.Title>
              <Card.Text className="bg-primary"><Link to="/game1">Play

              </Link></Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" style={{ width: "8rem" }}>
          <div className="header text-secondary">Level 2</div>
            <Card.Body>
              <Card.Title>
                <i className="bi bi-box font-size-40 link-secondary"></i>
              </Card.Title>
              <Card.Text className="bg-secondary">Play</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-around my-3">
          <Card border="success" style={{ width: "8rem" }}>
          <div className="header text-green">Level 3</div>
            <Card.Body>
              <Card.Title>
                <i className="bi bi-box font-size-40 text-green"></i>
              </Card.Title>
              <Card.Text className="bg-green">Play</Card.Text>
            </Card.Body>
          </Card>

          <Card border="danger" style={{ width: "8rem" }}>
          <div className="header text-red">Level 4</div>
            <Card.Body>
              <Card.Title>
                <i className="bi bi-box font-size-40 text-red"></i>
              </Card.Title>
              <Card.Text className="bg-red">Play</Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-around my-3">
          <Card border="warning" style={{ width: "8rem" }}>
          <div className="header text-warning">Level 5</div>
            <Card.Body>
              <Card.Title>
                <i className="bi bi-box font-size-40 link-warning"></i>
              </Card.Title>
              <Card.Text className="bg-warning">Play</Card.Text>
            </Card.Body>
          </Card>

          <Card border="info" style={{ width: "8rem" }}>
          <div className="header text-info">Level 6</div>
            <Card.Body>
              <Card.Title>
                <i className="bi bi-box font-size-40 link-info"></i>
              </Card.Title>
              <Card.Text className="bg-info">Play</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </Container>
  );
}

export default Home;
