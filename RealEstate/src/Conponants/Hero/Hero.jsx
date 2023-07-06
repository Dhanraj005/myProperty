import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          <div className="flexColStart hero-left">
            <motion.div className="image-container" initial={{x:"7rem",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:2,type:'spring'}}>
              <img src="./hero-image.png" alt="img" />
            </motion.div>
          </div>

          <div className="flexColStart hero-right">
            <div className=" hero-title">
              <div className="orange-circle" />
              <motion.h1 initial={{y:"2rem", opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:2,type:'spring'}}>
                Find <br />
                Your Dream Home
                <br /> With Us
              </motion.h1>
            </div>
            <div className=" hero-des">
              <span>
                The way we see it,
                <br /> real wealth means having the money and the freedom
                <br /> to live life on your own terms
              </span>
              <span>
                Join with us for the best investment on Earth is earth.
              </span>
            </div>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text input1 " />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColStart stat">
                <span>
                  <CountUp start={8000} end={9900} duration={10} />
                  <span>+</span>
                </span>
                <span>Premium Sites</span>
              </div>
              
              <div className="flexColStart stat">
                <span>
                  <CountUp start={3500} end={5500} duration={10} />
                  <span>+</span>
                </span>
                <span>Happy Customar</span>
              </div>
              
              <div className="flexColStart stat">
                <span>
                  <CountUp start={1000} end={1500} duration={5} />
                  <span>+</span>
                </span>
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
