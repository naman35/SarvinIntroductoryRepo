import React from "react";

import AliceCarousel from "react-alice-carousel";
import Airbnb from "../../../pages/assets/airbnb.png";
import Google from "../../../pages/assets/Google.webp";
import Youtube from "../../../pages/assets/Youtube.png";
import Nike from "../../../pages/assets/Nike.png";
import Lamborghini from "../../../pages/assets/Lamborghini.png";
import Hm from "../../../pages/assets/hm-.png";
import Globe from "../../../pages/assets/globe.png";
import Tibco from "../../../pages/assets/Tibco.png";
import BigYellow from "../../../pages/assets/BigYellow.png";
import WaltDisney from "../../../pages/assets/waltdisney.png";
import BigBazaar from "../../../pages/assets/BigBazaar.png";
import Cococola from "../../../pages/assets/Cococola.png";
import FedEx from "../../../pages/assets/FedEx.webp";
import Vale from "../../../pages/assets/Vale.png";
import Macy from "../../../pages/assets/Macy.png";

import "react-alice-carousel/lib/alice-carousel.css";

function BrandCrousel({ isTabletOrMobile = false }) {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 80,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <img
        src={Airbnb}
        onDragStart={handleDragStart}
        role="presentation"
        alt="fvf"
        height={200}
        width={200}
      />
      <img
        src={Google}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src={Youtube}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src={Nike}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={Lamborghini}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 80,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <img
        src={Hm}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src={Globe}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src={Tibco}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={BigBazaar}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={BigYellow}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 80,
        paddingRight: 20,
        paddingLeft: 20,
      }}
    >
      <img
        src={WaltDisney}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={200}
        width={200}
      />
      <img
        src={FedEx}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />{" "}
      <img
        src={Cococola}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={Vale}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
      <img
        src={Macy}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={200}
        width={200}
      />
    </div>,
  ];
  const mobile_items = [
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 20,
        paddingRight: 40,
        paddingLeft: 0,
      }}
    >
      <img
        src={Airbnb}
        onDragStart={handleDragStart}
        role="presentation"
        alt="fvf"
        height={180}
        width={180}
      />
      <img
        src={Google}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={180}
        width={180}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 20,
        paddingRight: 40,
        paddingLeft: 20,
      }}
    >
      <img
        src={Youtube}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={180}
        width={180}
      />{" "}
      <img
        src={Nike}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={180}
        width={180}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 20,
        paddingRight: 40,
        paddingLeft: 0,
      }}
    >
      <img
        src={Lamborghini}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={180}
        width={180}
      />
      <img
        src={Hm}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={180}
        width={180}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 20,
        paddingRight: 40,
        paddingLeft: 0,
      }}
    >
      <img
        src={Globe}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={180}
        width={180}
      />{" "}
      <img
        src={Tibco}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={180}
        width={180}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 20,
        paddingRight: 40,
        paddingLeft: 0,
      }}
    >
      <img
        src={BigBazaar}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={150}
        width={150}
      />
      <img
        src={BigYellow}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={150}
        width={150}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 20,
        paddingRight: 40,
        paddingLeft: 0,
      }}
    >
      <img
        src={WaltDisney}
        onDragStart={handleDragStart}
        role="presentation"
        alt="tret"
        height={150}
        width={150}
      />
      <img
        src={FedEx}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={150}
        width={150}
      />
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 80,
        paddingBottom: 20,
        paddingRight: 40,
        paddingLeft: 0,
      }}
    >
      {" "}
      <img
        src={Cococola}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={180}
        width={180}
      />
      <img
        src={Vale}
        onDragStart={handleDragStart}
        role="presentation"
        alt="dvd"
        height={150}
        width={150}
      />
    </div>,
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "#be4b47",
          fontSize: "38px",
          fontWeight: 400,
          marginTop: "120px",
        }}
      >
        Our Favourite Brands
      </div>
      <div>
        <AliceCarousel
          mouseTracking={false}
          items={isTabletOrMobile ? mobile_items : items}
          disableButtonsControls
          infinite
          disableDotsControls
          autoPlayInterval={800}
          autoPlay
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "#be4b47",
          fontSize: "38px",
          fontWeight: 400,
          marginTop: "80px",
        }}
      >
        Trusted By Some Top Notch Stars
      </div>
      <AliceCarousel
        mouseTracking
        items={isTabletOrMobile ? mobile_items : items}
        autoPlay
        infinite
        disableButtonsControls
        disableDotsControls
        autoPlayInterval={1200}
      />
    </div>
  );
}

export default BrandCrousel;
