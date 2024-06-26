"use client";
import React from "react";
import Post from "../../../pages/assets/post.png";
import Typewriter from "typewriter-effect";

import CreaterCard from "../commons/CreaterCard/CreaterCard.js";

import GiftCard from "../commons/GiftCard/index.js";
import "./style.css";
function ApplynEarn({ isTabletOrMobile = false }) {
  return (
    <>
      <div className="bg-vid">
        <img
          alt="alternate"
          src="https://techstory.in/wp-content/uploads/2022/08/How-to-make-money-on-Instagram.jpg"
          width="100%"
          height="100%"
        />
        <img
          alt="alternate"
          src="https://www.pcworld.com/wp-content/uploads/2023/10/youtube-disappearing.jpg?quality=50&strip=all&w=1024"
          width="100%"
          height="100%"
        />
        <img
          alt="alternate"
          src="https://cdn.punchng.com/2021/03/a2-8.jpg"
          width="100%"
          height="100%"
        />
        <img
          alt="alternate"
          src="https://www.proceedinnovative.com/wp-content/uploads/2018/09/video-marketing-1.png"
          width="100%"
          height="100%"
        />
      </div>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "#be4b47",
          fontSize: "38px",
          fontWeight: 400,
          marginTop: "10px",
          fontStyle: "normal",
          marginBottom: "20px",
        }}
      >
        <Typewriter
          options={{
            strings: ["You Just Need To...."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isTabletOrMobile ? "column" : "row",
          justifyContent: "center",
          gap: 40,
          marginBottom: "20px",
        }}
      >
        <div class={isTabletOrMobile ? "mt-8 mx-8" : "mt-16"}>
          <CreaterCard
            name="Loreal Paris color"
            type="Loreal Styling & Salon"
            img="https://m.media-amazon.com/images/I/51MAaw-IrGL.jpg"
            category="Fashion"
            section="flow"
          />
          <div class="flex justify-center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "#DC4653",
                fontSize: "38px",
                fontWeight: 500,
                marginTop: "10px",
                marginBottom: "20px",
                fontStyle: "normal",
              }}
            >
              Apply
            </div>
          </div>
        </div>
        <div
          class={
            isTabletOrMobile
              ? "flex justify-center w-full mt-10"
              : "flex-col justify-center w-20 mt-48"
          }
        >
          <img
            alt="alternate"
            src={
              isTabletOrMobile
                ? "https://cdn-icons-png.flaticon.com/512/59/59690.png"
                : "https://pngbong.com/wp-content/uploads/2023/03/Arrow-PNG-Image.png"
            }
            width={80}
          />
        </div>
        <div class=" flex-col justify-center w-96">
          <img alt="alternate" src={Post} />{" "}
          <div class="flex justify-center mt-2">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "#DC4653",
                fontSize: "38px",
                fontWeight: 500,
                marginTop: "10px",
                marginBottom: "20px",
                fontStyle: "normal",
              }}
            >
              Post
            </div>
          </div>
        </div>
        <div
          class={
            isTabletOrMobile
              ? "flex justify-center w-full mt-10"
              : "flex-col justify-center w-20 mt-48"
          }
        >
          <img
            alt="alternate"
            src={
              isTabletOrMobile
                ? "https://cdn-icons-png.flaticon.com/512/59/59690.png"
                : "https://pngbong.com/wp-content/uploads/2023/03/Arrow-PNG-Image.png"
            }
            width={80}
          />
        </div>
        <div>
          <div>
            {" "}
            <GiftCard />
          </div>

          <div class="flex justify-center mt-4">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "#DC4653",
                fontSize: "38px",
                fontWeight: 300,
                marginTop: "10px",
                marginBottom: "20px",
                fontStyle: "normal",
              }}
            >
              Earn
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplynEarn;
