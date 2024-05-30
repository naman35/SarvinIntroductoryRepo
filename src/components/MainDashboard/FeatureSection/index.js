"use client";
import React, { useState } from "react";
import Lottie from "react-lottie-player";
import Feature from "../commons/animations/feature.json";
import ShoppingMart from "../commons/animations/shoppingmart.json";
import { Button } from "../commons/button.tsx";
import Typewriter from "typewriter-effect";
import Modal from "../commons/modal/index.js";
import BgVideo from "../../../pages/assets/backvideo5.mp4";
import "./style.css";

function FeatureSection({ openModal, setOpenModal = () => {}, currentColor }) {
  return (
    <>
      <div>
        <video autoPlay loop muted className="bg-vid">
          <source src={BgVideo} type="video/mp4" />{" "}
        </video>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: currentColor,
          fontSize: "48px",
          fontWeight: 700,
          marginTop: "40px",
          marginBottom: "80px",
          transition: "color 2s",
          color: "#DC4653",
        }}
      >
        <Typewriter
          options={{
            strings: ["One Stop Solution for Creators and Brands need"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: 162,
          }}
        >
          <div style={{ width: "50%", marginLeft: "40px" }}>
            <div
              style={{
                color: "#2D2D2D",
                fontSize: "36px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Connecting Brands and Creators
            </div>
            <div
              style={{
                color: "#2D2D2D",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              Lorem IpBum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem IpBum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </div>
            <div>
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
          </div>
          <div style={{ width: "50%" }}>
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
            width: "100%",
            gap: 162,
            marginTop: 140,
          }}
        >
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
          <div style={{ width: "50%", marginLeft: "40px", marginTop: "2rem" }}>
            <div
              style={{
                color: "#2D2D2D",
                fontSize: "36px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Searching Businesses,Creators and Services
            </div>
            <div
              style={{
                color: "#2D2D2D",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              Lorem IpBum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem IpBum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
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
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
