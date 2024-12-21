
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, HouseDoor } from 'react-bootstrap-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className=" text-white py-4">
      <Container>
        <Row className="gy-4">
          
          <Col md={3}>
            <div className="d-flex align-items-center mb-3">
              <HouseDoor size={30} className="me-2" style={{ color: "#4D869C" }} />
              <h5>Asyut Premium Inns</h5>
            </div>
            <p>contact.asyutinns@gmail.com</p>
            <p>+12 345-678-9999</p>
            <p>123 Al-Thawra Street, Al-Gamaa District, Asyut, Egypt</p>
          </Col>

          
          <Col md={3}>
            <h5>Quick Menu</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/" className="text-white text-decoration-none">About</a></li>
              <li><a href="/" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          
          <Col md={3}>
            <h5>Subscribe Newsletter</h5>
            <p>Subscribe to get notifications about new updates.</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="primary">Subscribe</Button>
            </Form>
          </Col>

          
          <Col md={3}>
            <h5>Social Icons</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-white me-3"><Facebook size={25} /></a>
              <a href="https://instagram.com" className="text-white me-3"><Instagram size={25} /></a>
              <a href="https://twitter.com" className="text-white"><Twitter size={25} /></a>
            </div>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: "#555" }} />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} All rights reserved. Designed with ❤️ by Asyut Creative Team.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;