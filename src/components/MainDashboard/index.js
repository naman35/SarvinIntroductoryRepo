import React from "react";
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

function MainDashboard({
  openModal,
  setOpenModal = () => {},
  isTabletOrMobile = false,
}) {
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
            alt="Main Dashboard"
          />
        </div>
      </div>
      <div style={{ opacity: 1, zIndex: 100000000000000000 }}>
        {!isTabletOrMobile ? (
          <ParallaxProvider>
            <div style={styles}>
              <HorizontalScroller />
              <FeatureSection
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
              <Parallax speed={60} translateX={(10, 10)}>
                <ApplynEarn />
              </Parallax>
              <Parallax speed={70} translateX={(0, 10)}>
                {" "}
                <BrandCrousel />
              </Parallax>
              <Parallax speed={70} translateY={(0, 22)}>
                <Testimonials />
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
                <JumbotronSection />
              </Parallax>
              <Parallax speed={10} translateY={(10, 22)}>
                {" "}
                <AboutOurTeam />
              </Parallax>
              <br />
            </div>

            <ContactForm />
          </ParallaxProvider>
        ) : (
          <div class="relative">
            <FeatureSection
              openModal={openModal}
              setOpenModal={setOpenModal}
              isTabletOrMobile={isTabletOrMobile}
            />{" "}
            <Testimonials />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainDashboard;
