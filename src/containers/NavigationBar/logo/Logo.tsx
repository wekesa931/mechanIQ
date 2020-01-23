import React from "react";

import "../Navigation.scss";

const Logo: React.SFC = () => {
  return (
    <div className="navItems-logo-container">
      <img
        className="navItems-logo-container-main-logo"
        src="https://res.cloudinary.com/wekesa931/image/upload/v1579510479/mechaniq/mechaniq-main-logo.png"
        alt="Logo"
      />
      <div>
        <div className='navItems-logo-container-line'></div>
      </div>
      <div className="navItems-logo-container-search-box">
        Search category
      </div>
    </div>
  );
};

export default Logo;
