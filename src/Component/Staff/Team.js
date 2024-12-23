import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import data from "../../utils/dataa.json";
import CommonHeading from "../common/CommonHeading";


const iconComponents = {
  FaFacebookF: FaFacebookF,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
};

const { socialIcons, team } = data;

export default function Teams() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading heading="Our Team" subtitle="Explore Our" title="Staffs" />
          <div className="row g-4">
            {team.map((item, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={index}
              >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.image} alt="img" />
                    <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                      {socialIcons.slice(0, 3).map((val, index) => {
                        const IconComponent = iconComponents[val.icon];
                        return (
                          <a className="btn btn-square btn-light mx-1" href="#" key={index}>
                            <IconComponent />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">{item.name}</h5>
                    <small>{item.designation}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}