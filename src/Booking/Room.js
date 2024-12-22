import React from "react";
import { Container, Row, Col, Card ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const RoomsList = ({ room }) => {
  return (
    <Container>
      <Row className="mt-4">
        {room.map((room, index) => (
          <Col md={10} className="mb-4" key={index}>
            <Card className="shadow-sm">
              <Row className="g-0 align-items-center">
                
                <Col md={4}>
                  <Card.Img
                    src={room.image}
                    alt={room.type}
                    className="img-fluid"
                    style={{ borderRadius: "5px" }}
                  />
                </Col>
                
                <Col md={8}>
                  <Card.Body>
                    <h5 className="card-title">Type: {room.type}</h5>
                    <p className="card-text">Price: ${room.price}</p>
                    <Button variant="primary" as={Link} to={`/booking/${room.hotelId}`}>
                      Book Now
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RoomsList;