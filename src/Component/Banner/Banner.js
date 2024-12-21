import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/imges/slider/4.gif";
import sliderImg1 from "../../assets/imges/slider/3.png";
import sliderImg2 from "../../assets/imges/slider/3.gif";
import sliderImg3 from "../../assets/imges/slider/2.gif";
import "../Banner/banner.css";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  Discover <span>Assiut</span> Like Never Before
                </h5>
                <p className="sub_text">
                  Discover the best accommodations in Assiut. Whether for
                  business or leisure, we offer a range of options to suit your
                  needs, ensuring a relaxing and memorable stay.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  Enjoy a <span>Journey to Assiut</span> and Explore the City's
                  Charm
                </h5>
                <p className="sub_text">
                  Discover the most beautiful landmarks in Assiut and enjoy
                  staying at the best hotels offering comfort and tranquility.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg2} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  Relax in <span>Assiut</span> and Start Your Adventure
                </h5>
                <p className="sub_text">
                  Enjoy exciting trips and wonderful accommodations in Assiut for
                  an unforgettable experience. Embrace every moment in this
                  beautiful city.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg3} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  <span>Assiut</span> Awaits You for Rest and Relaxation
                </h5>
                <p className="sub_text">
                  Book your stay now in Assiut and enjoy the city's vibrant
                  atmosphere with exceptional hotel services providing ultimate
                  comfort.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
