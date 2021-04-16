import React from "react";
import { Container, Modal } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=5e840d136ada47be9bd8479cc2223f1e&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>SpotyTime</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Inicia sesion para poder escuchar tu musica!</p>
        </Modal.Body>

        <Modal.Footer>
          <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login
          </a>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
}
