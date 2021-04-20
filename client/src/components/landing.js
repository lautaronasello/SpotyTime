import { React } from "react";
import Login from "./login";
import { Container, Row, Col } from "react-bootstrap";

export default function LandingPage() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <h1 className="display-1 text-center ">Bienvenido!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Login />
        </Col>
      </Row>
    </Container>
  );
}
