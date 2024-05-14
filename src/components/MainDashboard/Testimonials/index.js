"use client";
import React from "react";
import MetricCard from "../commons/3dCarousel/Card";
import Testimonial from "../commons/commonsvg/testimonial.svg";
import Star from "../commons/commonsvg/Star.svg";
import EmptyStar from "../commons/commonsvg/EmptyStar.svg";
import Carroussel from "../commons/3dCarousel/Carousel";
import { v4 as uuidv4 } from "uuid";

function Testimonials() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <MetricCard>
          <img src={Testimonial} alt="User DP" />
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            Sarah K.
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            UX Designer @Brello
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
              fontSize: 16,
              marginTop: "30px",
            }}
          >
            "I was looking for a way to streamline my design process and the
            Anima’s Landing Page UI Kit was a lifesaver! The intuitive design
            and ease of customisation have saved me hours of time and effort.
            Highly recommend!"
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
          </div>
        </MetricCard>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <MetricCard>
          <img src={Testimonial} alt="User DP" />
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            Sarah K.
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            UX Designer @Brello
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
              fontSize: 16,
              marginTop: "30px",
            }}
          >
            "I was looking for a way to streamline my design process and the
            Anima’s Landing Page UI Kit was a lifesaver! The intuitive design
            and ease of customisation have saved me hours of time and effort.
            Highly recommend!"
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
            <img src={EmptyStar} alt="Ratings" />
          </div>
        </MetricCard>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <MetricCard>
          <img src={Testimonial} alt="User DP" />
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            Sarah K.
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            UX Designer @Brello
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
              fontSize: 16,
              marginTop: "30px",
            }}
          >
            "I was looking for a way to streamline my design process and the
            Anima’s Landing Page UI Kit was a lifesaver! The intuitive design
            and ease of customisation have saved me hours of time and effort.
            Highly recommend!"
          </div>
          <div style={{ display: "flex", marginTop: "30px" }}>
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
            <img src={Star} alt="Ratings" />
            <img src={EmptyStar} alt="Ratings" />
            <img src={EmptyStar} alt="Ratings" />
          </div>
        </MetricCard>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "#DC4653",
          fontSize: "38px",
          fontWeight: 700,
          marginTop: "120px",
          marginBottom: "20px",
          alignSelf: "stretch",
        }}
      >
        Real Stories from Satisfied Customers
      </div>
      <div
        style={{
          color: "#2D2D2D",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "100%",
          alignSelf: "stretch",
        }}
      >
        See how our landing page ui kit is making an impact.
      </div>
      <div
        style={{
          marginTop: "300px",
          marginBottom: "300px",
        }}
      >
        <Carroussel
          cards={cards}
          height="40px"
          width="80%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </>
  );
}

export default Testimonials;
