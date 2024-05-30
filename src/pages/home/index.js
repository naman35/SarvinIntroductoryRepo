/* node module imports */
import React, { useState } from "react";

/* app imports */
import "./style.scss";
import { FooterSection } from "./components/footer-section.js";
import { BubbleText } from "./components/bubbleText.jsx";
import IntroductoryPage from "./components/IntroductoryPage/index.js";
import MainDashboard from "../../components/MainDashboard/index.js";
import Statistics from "../../components/MainDashboard/Statistics/index.js";

/* video imports */

export const HomePage = ({ openModal, setOpenModal = () => {} }) => {
  return (
    <>
      <IntroductoryPage openModal={openModal} setOpenModal={setOpenModal} />
      <MainDashboard openModal={openModal} setOpenModal={setOpenModal} />

      <FooterSection />
    </>
  );
};
