"use client";
import React from "react";
import Lottie from "react-lottie-player";
import MidContent from "../commons/animations/influencer.json";

import { Button } from "../commons/button.tsx";
import Typewriter from "typewriter-effect";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Carroussel from "../commons/3dCarousel/Carousel";
import { v4 as uuidv4 } from "uuid";

function HeroPanel({ currentColor }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "100px 45px",
      }}
    >
      <div>
        <div
          style={{
            color: "#2D2D2D",
            zIndex: 20000,
            width: "95%",
            /* Display XL */
            fontSize: "67px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "130%" /* 87.1px */,
            letterSpacing: "-1.675px",
          }}
        >
          Your creative{" "}
          <span
            style={{
              color: currentColor,
              transition: "color 2s",
            }}
          >
            Odyssey
          </span>{" "}
          starts here
        </div>
        <div
          style={{
            color: "#2D2D2D",
            fontSize: "21px",
            fontWeight: 100,
            lineHeight: "150%",
            marginBottom: "40px",
            marginTop: "20px",
          }}
        >
          <Typewriter
            options={{
              strings: [
                " Empowering Content Creators with Innovative Tools & Endless Possibilities",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <Button
          style={{
            backgroundColor: currentColor,
            fontWeight: 600,
            textAlign: "center",
            fontSize: "16px",
            gap: "8px",
            lineHeight: "24px",
            boxShadow: "0 0 400px rgba(40, 187, 187, 0.4)",
            transition: "background-color 2s",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_134_3477)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6247 12.759L13.2391 11.959L13.9799 8.2766L11.1607 10.759L9.7751 9.95899L15.6775 5.33661L14.6247 12.759ZM10.3999 12.3982C10.3999 11.7358 10.9375 11.1982 11.5999 11.1982C12.2623 11.1982 12.7999 11.7358 12.7999 12.3982C12.7999 13.0606 12.2623 13.5982 11.5999 13.5982C10.9375 13.5982 10.3999 13.0606 10.3999 12.3982ZM7.52311 19.4598L8.57511 12.0374L9.9607 12.8374L9.2199 16.5198L12.0391 14.0374L13.4247 14.8374L7.52311 19.4598ZM12.0047 0.0078125C5.37993 0.0078125 0.00952148 5.37902 0.00952148 12.003C0.00952148 18.6278 5.37993 23.9982 12.0047 23.9982C18.6295 23.9982 23.9999 18.6278 23.9999 12.003C23.9999 5.37902 18.6295 0.0078125 12.0047 0.0078125Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_134_3477">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Why Sarvin
        </Button>
      </div>

      <Lottie
        loop
        animationData={MidContent}
        play
        style={{ width: 500, height: 700 }}
      />
    </div>
  );
}

export default HeroPanel;
