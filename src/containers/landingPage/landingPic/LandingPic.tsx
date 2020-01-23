import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./landingPic.scss";

export interface LandingPicsProps {}

const LandingPics: React.SFC<LandingPicsProps> = () => {
  return (
    <Carousel
      stopOnHover={false}
      interval={4000}
      transitionTime={1000}
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      <div
        style={{
          // backgroundImage: 'linear-gradient(red, yellow)',
          height: "61vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://res.cloudinary.com/wekesa931/image/upload/v1579533953/mechaniq/engine.jpg)"
        }}
      >
        <div className="pic-content">
          <div className="pic-content-info">
            <h1>
              We Fix <span>Cars</span>
            </h1>
            <p>
              Engine <span>Transmission System</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className="slider-image"
        style={{
          height: "61vw",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://res.cloudinary.com/wekesa931/image/upload/v1579533953/mechaniq/engine.jpg)"
        }}
      >
        <div className="pic-content">
          <div className="pic-content-info">
            <h1>
              We Fix <span>Cars</span>
            </h1>
            <p>
              Engine <span>Transmission System</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/wekesa931/image/upload/v1579533953/mechaniq/engine.jpg"
          alt="altimage"
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default LandingPics;
