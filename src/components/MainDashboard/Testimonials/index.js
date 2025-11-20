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
          <img
            src="https://media.licdn.com/dms/image/C5603AQHjJ3aAaUBRQg/profile-displayphoto-shrink_800_800/0/1606489391891?e=2147483647&v=beta&t=Pl90BzpHHZPHXk51o56wSWGF1AF85WZmnAHkThuk-fk"
            alt="User DP"
            width={100}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            Amrita K.
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            Business Owner @Jaipur
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
            “I run a small fashion boutique in Jaipur with limited marketing
            budget. Through Sarvin, I connected with a micro-influencer who had
            only 12K followers but was super engaged in our region. She posted a
            try-on Reel of our festive collection, and within a week, footfall
            in my store went up by 20%, and we nearly sold out of the new line!”
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
          <img
            src="https://media.licdn.com/dms/image/C5103AQHGpsMKE2Pjqg/profile-displayphoto-shrink_800_800/0/1541873857184?e=2147483647&v=beta&t=szrnbayzM1WnCEkpUJCD6S1eSoV-HGjjE1udxYjrDjg"
            alt="User DP"
            width={100}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            Khushi Nair
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            Entrepreneur @Bengaluru
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
            "Our millet-based snack startup in Bengaluru wanted real customers
            but couldn’t afford big ads. We teamed up with a local fitness coach
            via Sarvin, who shared recipes using our snacks. The authenticity
            resonated — in 2 months, our monthly sales doubled!""
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
          <img
            src="https://media.licdn.com/dms/image/C4D03AQH6A0uZp8KVBw/profile-displayphoto-shrink_400_400/0/1662181508642?e=2147483647&v=beta&t=LrZdcOe75HQt2YdKYo_mnXYMQyNyU4CUlZf7hoTpHeg"
            alt="User DP"
            width={100}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            Sneh M.
          </div>
          <div
            style={{
              color: "#2D2D2D",
              textAlign: "center",
              fontWeight: 400,
            }}
          >
            Founder @Uttar Pradesh
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
            “Running a green-cleaning products brand, we worried about looking
            too ‘corporate’. Using Sarvin, we worked with micro-creators
            passionate about sustainability. They made real home-cleaning videos
            using our products. As a result, our conversions improved, and the
            cost-per-acquisition was way lower than traditional ads.”
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
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "#be4b47",
          fontSize: "38px",
          fontWeight: 500,
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
          fontWeight: 300,
          lineHeight: "100%",
          alignSelf: "stretch",
        }}
      >
        See How Our Sarvin Creating An Impact.
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
