import React, { useState } from "react";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
  Accordion,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Price.css";
import data from "../../utils/accordion";
const Price = () => {
  return (
    <>
      <section className="v-wrapper">
        <div className="padding innerWidth flexCenter v-container">
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="" />
            </div>
          </div>
          <div className="flexColStart">
            <span className="orangeText">Our Price</span>
            <span className="primaryText">Price We Give to you</span>
            <span className="secondaryText">
              We always readey to help by providing the best servece for you.
              <br />
              we belive a good place to live can make your life better
            </span>
            <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
              {data.map((item, i) => {
                const [className, setClassName] = useState(null);

                return (
                  <AccordionItem
                    className={`'accordianItem'${className}`}
                    key={i}
                    uuid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="flexCenter">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
