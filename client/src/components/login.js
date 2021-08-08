import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=5e840d136ada47be9bd8479cc2223f1e&response_type=code&redirect_uri=https://spotytune.web.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export default function Login() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: '50vh' }}
    >
      <Card border='success' style={{ width: '18rem' }}>
        <Card.Header>
          <Container>
            <Row>
              <Col>Spotytune</Col>
              <Col>
                <a
                  className='card-link'
                  href='https://www.linkedin.com/in/lautaronasello/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Lau Nasello
                </a>
              </Col>
            </Row>
          </Container>
        </Card.Header>

        <Card.Body className=' text-center align-items-center'>
          <Card.Title>Inicia Sesión para continuar</Card.Title>
          <Card.Text>Es necesario que tengas Spotify Premium!</Card.Text>
          <a className='btn btn-success btn-lg' href={AUTH_URL}>
            Login
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
}
