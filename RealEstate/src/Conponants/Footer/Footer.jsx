import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <section className="g-wrapper">
      <div className="padding innerWidth flexCenter f-container">
        {/* leftside */}

        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them
          </span>
        </div>
        <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondaryText">Mundhwa Road, KP</span>
            <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Service</span>
                <span>Product</span>
                <span>About Us</span>
            </div>

                           
        </div>
      </div>
    </section>
  );
};

export default Footer;
