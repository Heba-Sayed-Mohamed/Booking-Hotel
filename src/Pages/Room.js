import React, { useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import RoomsList from '../Booking/Room';
import data from "../utils/dataa.json";
import './room.css';

function Room() {
    const [priceRange, setPriceRange] = useState([0, 150]);
    const location = useLocation(); 
    const params = new URLSearchParams(location.search);
    const roomImage = params.get("roomImage") || "";
    

    const filteredRooms = data.room.filter(
        (room) => room.price >= priceRange[0] && room.price <= priceRange[1]
    );

    

    return (
        <div>
            <section
                className="room"
                style={{
                    background: `url(${roomImage}) no-repeat`
                    
                }}
            >
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
                                Room
                            </h1>
                            <div className="button-container" style={{ padding: "10px 20px", borderRadius: "5px", display: "inline-block" }}>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        color: "#fff",
                                    }}
                                >
                                    Home / Room
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="overlay"></div>
            </section>

            <section>
                <h1 style={{ textAlign: "center", margin: "20px 0", fontWeight: "bold" }}>Room List</h1>
                <Container className="mb-4">
                    <Row>
                        <Col md="6" className="mx-auto">
                            <label
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    display: "block",
                                    textAlign: "center",
                                    marginBottom: "10px",
                                }}
                            >
                                Filter by Price: ${priceRange[0]} - ${priceRange[1]}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="150"
                                step="10"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                style={{ width: "100%" }}
                            />
                        </Col>
                    </Row>
                </Container>

                <RoomsList room={filteredRooms} />
            </section>
        </div>
    )
}

export default Room;