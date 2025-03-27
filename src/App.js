import React from "react";
import { Navbar, Container, Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">My React App</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="App">
        <Container className="mt-4 text-center">
          <h1>Welcome to My App</h1>
          <Row className="mt-4">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>Some quick example text.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>Another example text.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>Final example text.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        
        </Container>
      </div>
    </>
  );
}

export default App;
