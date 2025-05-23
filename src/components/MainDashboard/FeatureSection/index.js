import React from "react";
import Lottie from "react-lottie-player";
import Feature from "../commons/animations/feature.json";
import ShoppingMart from "../commons/animations/shoppingmart.json";
import { Button } from "../commons/button.tsx";
import Typewriter from "typewriter-effect";
import BgVideo from "../../../pages/assets/backvideo5.mp4";
import "./style.css";

function FeatureSection({
  openModal,
  setOpenModal = () => {},
  isTabletOrMobile,
}) {
  return (
    <>
      {/* <div>
        <video autoPlay loop muted className="bg-vid">
          <source src={BgVideo} type="video/mp4" />{" "}
        </video>
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: isTabletOrMobile ? 32 : "48px",
          marginLeft: isTabletOrMobile ? 64 : 0,
          marginRight: isTabletOrMobile ? 64 : 0,
          fontWeight: 400,
          marginTop: isTabletOrMobile ? 0 : "40px",
          marginBottom: isTabletOrMobile ? 40 : "80px",
          transition: "color 2s",
          color: "#E65C55",
        }}
      >
        <Typewriter
          options={{
            strings: isTabletOrMobile
              ? ["What We Do ?...."]
              : ["One Stop Solution for Creators and Brands"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: isTabletOrMobile ? "column" : "row",
            gap: 162,
          }}
        >
          <div
            style={{
              width: isTabletOrMobile ? "80%" : "50%",
              marginLeft: "40px",
              marginRight: isTabletOrMobile ? "40px" : 0,
            }}
          >
            <div
              style={{
                color: "#2D2D2D",
                fontSize: isTabletOrMobile ? 24 : 36,
                fontWeight: 500,
                marginBottom: "20px",
              }}
            >
              Har Brand Ki Kahaani Ab Hogi Viral!!
            </div>
            <div
              style={{
                color: "#2D2D2D",
                fontSize: isTabletOrMobile ? 14 : 21,
                fontWeight: 300,
              }}
            >
              Let's Connect you with the most suitable influencers based on your
              campaign goals.
              <br />
              You can Easily create, manage, and track influencer collaborations
              with advanced tools. <br />
              Join us and get your first free sarvin coins. We ensure
              cost-effective partnerships and easy "pay as you go"!
            </div>
            <div>
              <Button
                style={{
                  marginTop: "30px",
                  fontSize: 16,
                  fontWeight: 500,
                  backgroundColor: "#1f4067",
                  color: "#fff",
                  transition: "background-color 2s",
                }}
                onClick={() => setOpenModal(!openModal)}
              >
                Request an Invite
              </Button>
            </div>
          </div>
          <div style={{ width: isTabletOrMobile ? "100%" : "50%" }}>
            {" "}
            <Lottie
              loop
              animationData={Feature}
              play
              style={{ width: "90%", height: "100%", marginBottom: "3rem" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isTabletOrMobile ? "column" : "row",
            width: "100%",
            gap: 162,
            marginTop: 140,
          }}
        >
          {!isTabletOrMobile && (
            <div style={{ width: "50%" }}>
              {" "}
              <Lottie
                loop
                animationData={ShoppingMart}
                play
                style={{
                  width: "120%",
                  height: "120%",
                  marginTop: "-13rem",
                }}
              />
            </div>
          )}
          <div
            style={{
              width: isTabletOrMobile ? "80%" : "50%",
              marginLeft: "40px",
              marginTop: isTabletOrMobile ? 0 : "2rem",
              marginRight: isTabletOrMobile ? "40px" : 0,
            }}
          >
            <div
              style={{
                color: "#2D2D2D",
                fontSize: isTabletOrMobile ? 24 : 36,
                fontWeight: 400,
                marginBottom: "20px",
              }}
            >
              Influencers Aapka Fame Ka Shortcut!
            </div>
            <div
              style={{
                color: "#2D2D2D",
                fontSize: isTabletOrMobile ? 14 : 22,
                fontWeight: 300,
              }}
            >
              -Discover brand collaboration and turn your creativity to reach
              into consistent income streams
              <br />
              -Time Saving simplified process for finding and managing brand
              partnerships in just 3 clicks
              <br /> -Engage with brands through Sarvin’s bidding system and
              coins-based transactions for more control and flexibility.
            </div>
            <Button
              style={{
                marginTop: "30px",
                fontSize: 16,
                fontWeight: 600,
                backgroundColor: "#1f4067",
                color: "#fff",
                transition: "background-color 2s",
              }}
              onClick={() => setOpenModal(!openModal)}
            >
              Request an Invite
            </Button>
          </div>
          {isTabletOrMobile && (
            <div style={{ width: "80%" }}>
              {" "}
              <Lottie
                loop
                animationData={ShoppingMart}
                play
                style={{
                  width: "120%",
                  height: "120%",
                  marginTop: "-13rem",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
