import React, { useState } from 'react';
import { Col, Container, Form, Row, Card, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import CommonHeading from "../Component/common/CommonHeading";
import './booking.css';

function Booking() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());



    return (
        <div>
            <section className="booking" >
                <Container>
                    <Row className="align-items-center">
                        <Col md="12" className="text-center">
                            <h1
                                style={{
                                    fontSize: "36px",
                                    fontWeight: "bold",
                                    color: "#fff",
                                    marginBottom: "20px",
                                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                Booking
                            </h1>
                            <div className="button-container" style={{ padding: "10px 20px", borderRadius: "5px", display: "block" }}>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        color: "#fff",
                                    }}
                                >
                                    Home  /
                                </Link>

                                <Link
                                    to="/room"
                                    style={{
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        color: "#fff",
                                    }}
                                >
                                    /   Room
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="overlaybooking"></div>
            </section>
            <CommonHeading heading="..." subtitle="Your Booking" title=" Our Priority" />
            <section>
                <Container>
                    <Row>
                        <Col md="8" lg="8">
                            <div className="booking-form-warp border rounded-3">
                                <div className="form-title px-4 border-bottom py-3">
                                    <h3 className="h4 font-bold m-0"> Your Details</h3>
                                </div>

                                <Form className=" form-container p-4 ">
                                    <Row>
                                        <Form.Group
                                            as={Col}
                                            md="6"
                                            controlId="firstname"
                                            className="mb-4"
                                        >
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            md="6"
                                            controlId="lastname"
                                            className="mb-4"
                                        >
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Last name"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-4"
                                            controlId="email.ControlInput1"
                                            as={Col}
                                            md="6"
                                        >
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="name@example.com"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-4"
                                            controlId="phone"
                                            as={Col}
                                            md="6"
                                        >
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Phone Number" />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-4"
                                            controlId="checkin"
                                            as={Col}
                                            md="6"
                                        >
                                            <Form.Label className="d-block">Check In</Form.Label>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}
                                                className="form-control w-100"
                                                dateFormat="dd, MMMM, yyyy"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-4"
                                            controlId="checkout"
                                            as={Col}
                                            md="6"
                                        >
                                            <Form.Label className="d-block">Check Out</Form.Label>
                                            <DatePicker
                                                selected={endDate}
                                                onChange={(date) => setEndDate(date)}
                                                selectsEnd
                                                startDate={endDate}
                                                endDate={startDate}
                                                dateFormat="dd, MMMM, yyyy"
                                                className="form-control w-100"
                                            />
                                        </Form.Group>
                                        <Col md="12">
                                            <button className="primaryBtn "> Submit Now</button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>

                        <Col md="4" lg="4">
                            <Card className="card-info p-0 shadow-sm bg-white">
                                <Card.Header>
                                    {" "}
                                    <h1 className="font-bold  h4 mt-2">Price Summary</h1>{" "}
                                </Card.Header>
                                <Card.Body className="pb-0">
                                    <ListGroup>
                                        <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                                            <span> Base Price</span>
                                            <strong>$28,660</strong>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                                            <span> Total Discount <span className="badge bg-danger">
                                                10%
                                            </span></span>
                                            <strong>$20</strong>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="border-0 d-flex justify-content-between h5 pt-0">
                                            <span> Taxes % Fees</span>
                                            <strong>$28,660</strong>
                                        </ListGroup.Item>

                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between py-4">
                                    <span className="font-bold h5"> Payable Now</span>
                                    <strong className="font-bold h5">$28,660</strong>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <CommonHeading heading="..." />
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Booking;