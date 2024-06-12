/* node module imports */
import React from "react";

/* app imports */
import "./style.scss";
import { FooterSection } from "./components/footer-section.js";
import IntroductoryPage from "./components/IntroductoryPage/index.js";
import MainDashboard from "../../components/MainDashboard/index.js";

/* video imports */

export const HomePage = ({
  openModal,
  setOpenModal = () => {},
  isTabletOrMobile = false,
}) => {
  return (
    <>
      <IntroductoryPage
        isTabletOrMobile={isTabletOrMobile}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      <MainDashboard
        openModal={openModal}
        setOpenModal={setOpenModal}
        isTabletOrMobile={isTabletOrMobile}
      />

      <FooterSection />
    </>
  );
};
