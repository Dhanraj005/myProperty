import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdOutlineVideoCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <>
      <section className="c-wrapper">
        <div className="padding innerWidth flexCenter c-container">
          <div className="c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="img" />
            </div>
          </div>
          <div className="c-right flexColStart">
            <span className="orangeText">Contact Us !</span>
            <span className="primaryText">Easy To contact us</span>
            <span className="secondaryText">
              We are always ready to providing you the best servive{" "}
            </span>
            <div className="flexColStart contactModes">
            {/* first row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">63726382163</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="secondaryText">63726382163</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Chat Us</div>
                </div>
              </div>

              {/* second Row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdOutlineVideoCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Vedio Call</span>
                      <span className="secondaryText">526 8389 8839</span>
                    </div>
                  </div>
                  <div className="flexCenter button"> Vedio Call</div>
                </div>
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdEmail size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Email</span>
                      <span className="secondaryText">realEstate@gmail.com</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Email Now </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
