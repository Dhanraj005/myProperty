import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderSettings } from "../../utils/Common";
import "swiper/css";
import "./Properties.css";

import data from "../../utils/slider.json";

const Properties = () => {
  return (
    <>
      <section className="r-wrapper">
        <div className="padding innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Deals</span>
            <span className="primaryText">Populer Properties</span>
          </div>

          <Swiper {...sliderSettings}>
<SliderButton/>

            {
                data.map((card,i)=>(
                    <SwiperSlide key={i} >
                    <div className="flexColStart r-card">
                    <img src={card.image} alt="home"/>
<span className="secondaryText r-price">
<span style={{color:"orange"}}>₹<span>{card.price}</span></span>

</span>
<span className="primaryText">{card.name}</span>
<span className="secondaryText">{card.detail}</span>
</div>

                    </SwiperSlide>
                
                ))
            }
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Properties;

const SliderButton =()=>{
    const swiper = useSwiper();
    return(
        <>
            <div className="flexCenter r-button">
<button onClick={()=>swiper.slidePrev()}>&lt;</button>
<button onClick={()=>swiper.slideNext()}>&gt;</button>
            </div>
        </>
    )
}
