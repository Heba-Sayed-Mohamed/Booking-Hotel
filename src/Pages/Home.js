import React from 'react';
import Banner from '../Component/Banner/Banner';
import AdvanceSearch from '../Component/AdvanceSearch/AdvanceSearch';
import Features from '../Component/Features/Features';

import { Container, Row, Col  } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";

import Gallery from "../Component/Gallery/Gallery";
import Cards from "../Component/Cards/Cards";
import data from "../utils/dataa.json";
import PopularCard from "../Component/Cards/PopularCard";
import Teams from '../Component/Staff/Team';

const { destinationsData, popularsData } = data;

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };



  return (
    <>
      <Banner />
      <AdvanceSearch />
      <Features />

      {/* tour seciton start */}

      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Top Destination For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return (
                    <Cards destination={destination} key={inx} />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* tour seciton start */}

      <section className="popular py-5">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Exceptional Hotels in Asyut </h1>
            </div>
          </Col>
        </Row>
        <Row>
        {popularsData.map((val, inx)=>{
          return(
          <Col  md={3} sm={6} xs={12} className="mb-5" key={inx}>
            <PopularCard val={val} />
          </Col>
        )
        })}
        </Row>
      </Container>
    </section>

      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">
              READY FOR AN UNFORGETTABLE STAY IN ASSIUT. REMEMBER US!
              </h2>
              <p className="text">
              Experience unmatched hospitality and comfort in the heart of Assiut.
              Book your stay with us and make memories that last a lifetime.,{" "}
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a
                href="tel:6398312365"
                className="secondary_btn bounce"
                rel="no"
              >
                {" "}
                Contact Us !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      <section className="gallery">
        <Container>
          <Row>
            <Col md="15">
              <div className="main_heading">
                <h1>Photo Gallery </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="15">
              <Gallery />
            </Col>
          </Row>
          
        </Container>
        
      </section>
      <Teams/>
    </>
  );
};

export default Home;