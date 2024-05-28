"use client";
import React, { useState, useEffect } from "react";
import SlideCardsInfluencer from "./SlideCardsInfluencer/index.js";
import BrandCrousel from "./BrandCrousel";
import FeatureSection from "./FeatureSection";
import { HorizontalScroller } from "../../pages/home/components/horizontal-scroller.js";
import Testimonials from "./Testimonials";
import AboutOurTeam from "./AboutOurTeam";
import ContactForm from "./ContactForm";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import styles from "./styles.module.css";
import SlideCards from "./SlideCards/index.js";
import ApplynEarn from "./ApplynEarn/index.js";
import Statistics from "./Statistics/index.js";
import { JumbotronSection } from "../../pages/home/components/jumbotron-section.jsx";

function MainDashboard({ openModal, setOpenModal = () => {}, currentColor }) {
  // const styles = useSpring({
  //   opacity: 1,
  //   translateX: 0,
  //   from: { opacity: 0, translateX: -100 },
  //   config: { duration: 2000 },
  // });
  // let scr = window.scrollY;
  // console.log(scr);
  // if (scr > 2500) {
  //   setIsVisible(true);
  // }

  return (
    <div>
      <div
        style={{
          opacity: 0.05,
          zIndex: 1,
          position: "fixed",
        }}
      >
        <div className={styles.imagecontainer}>
          {" "}
          <img
            src="https://digitalscholar.in/wp-content/uploads/2022/09/micro-influencers-india-body-image.png"
            unoptimized
            className={styles.image}
          />
        </div>
      </div>
      <div style={{ opacity: 1, zIndex: 100000000000000000 }}>
        <ParallaxProvider>
          <div style={styles}>
            <HorizontalScroller />
            <Parallax speed={60} translateX={(-20, 0)}>
              <FeatureSection
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </Parallax>
            <Parallax speed={60} translateX={(10, 10)}>
              <ApplynEarn />
            </Parallax>
            <Parallax speed={70} translateX={(0, 10)}>
              {" "}
              <BrandCrousel currentColor={currentColor} />
            </Parallax>
            <Parallax speed={70} translateY={(0, 22)}>
              <Testimonials currentColor={currentColor} />
            </Parallax>
            <Parallax speed={90} translateY={(10, 30)}>
              <SlideCards />
            </Parallax>
            <br /> <br /> <br /> <br /> <br />
            <Parallax speed={70} translateY={(10, 12)}>
              <SlideCardsInfluencer />
            </Parallax>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
            <br /> <br /> <br /> <br /> <br /> <br />
            <br /> <br /> <br />{" "}
            <Parallax speed={10} translateY={(10, 22)}>
              <Statistics />
            </Parallax>
            <Parallax speed={10} translateY={(10, 22)}>
              {" "}
              <AboutOurTeam currentColor={currentColor} />
            </Parallax>
            <Parallax speed={10} translateY={(10, 22)}>
              <JumbotronSection />
            </Parallax>
            <br />
          </div>

          <ContactForm currentColor={currentColor} />
        </ParallaxProvider>
      </div>
    </div>
  );
}

export default MainDashboard;
