import React from "react";
import MetricCard from "../commons/MetricCard";
import influencer from "./common/influencer.png";
import brands from "./common/brand.png";

function AboutOurTeam({ isTabletOrMobile = false }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#DC4653",
          fontSize: isTabletOrMobile ? "32px" : "48px",
          fontWeight: 400,
          margin: "60px 0 0px 0",
        }}
      >
        About Our Team
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 20px 0 20px",
          fontSize: "18px",
        }}
      >
        Get to know the faces behind the scenes and learn about the values that
        drives us
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: isTabletOrMobile ? 20 : 102,
          margin: isTabletOrMobile ? 20 : 100,
        }}
      >
        <MetricCard>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={influencer}
                role="presentation"
                alt="fvf"
                height="10vh"
                width="180vw"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ marginTop: 20, fontSize: 16, fontWeight: 700 }}>
                Miss Infy Gupta
              </div>
              <div style={{ marginTop: 2 }}>Influencer Rising Star</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: isTabletOrMobile ? "column" : "row",
                  marginTop: 20,
                  gap: 5,
                }}
              >
                <img
                  alt="alternate"
                  src="https://freepngimg.com/thumb/social_media/74406-like-media-button-social-youtube-marketing-instagram.png"
                  height={64}
                  width={74}
                />
                <img
                  alt="alternate"
                  src="https://i.pinimg.com/originals/4e/ff/ea/4effeae35be0a015037d4412c63e71da.png"
                  height={0}
                  width={60}
                />
                <img
                  alt="alternate"
                  src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=2000"
                  height={10}
                  width={60}
                />
              </div>
            </div>
          </div>
        </MetricCard>
        <MetricCard>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img
                alt="alternate"
                src="https://img.freepik.com/premium-photo/young-hipster-man-with-his-arms-crossed_1368-14417.jpg"
                role="presentation"
                height="100vh"
                width="950vw"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ marginTop: 20, fontSize: 16, fontWeight: 700 }}>
                Mr. Sarvin Collaborator
              </div>
              <div style={{ marginTop: 2 }}>Social media Marketing Expert</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: isTabletOrMobile ? "column" : "row",
                  marginTop: 20,
                  gap: 5,
                }}
              >
                <img
                  alt="alternate"
                  src="https://freepngimg.com/thumb/social_media/74406-like-media-button-social-youtube-marketing-instagram.png"
                  height={64}
                  width={74}
                />
                <img
                  alt="alternate"
                  src="https://i.pinimg.com/originals/4e/ff/ea/4effeae35be0a015037d4412c63e71da.png"
                  height={0}
                  width={60}
                />
                <img
                  alt="alternate"
                  src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=2000"
                  height={10}
                  width={60}
                />
              </div>
            </div>
          </div>
        </MetricCard>
        <MetricCard>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={brands}
              role="presentation"
              alt="fvf"
              height="100vh"
              width="200vw"
            />
            <div style={{ marginTop: 20, fontSize: 16, fontWeight: 700 }}>
              Mr. Brandy Singh
            </div>
            <div style={{ marginTop: 2 }}>Local/Global Business Owner</div>
            <div
              style={{
                display: "flex",
                flexDirection: isTabletOrMobile ? "column" : "row",
                marginTop: 20,
                gap: 5,
              }}
            >
              <img
                alt="alternate"
                src="https://freepngimg.com/thumb/social_media/74406-like-media-button-social-youtube-marketing-instagram.png"
                height={64}
                width={74}
              />
              <img
                alt="alternate"
                src="https://i.pinimg.com/originals/4e/ff/ea/4effeae35be0a015037d4412c63e71da.png"
                height={0}
                width={60}
              />
              <img
                alt="alternate"
                src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=2000"
                height={10}
                width={60}
              />
            </div>
          </div>
        </MetricCard>
      </div>
    </>
  );
}

export default AboutOurTeam;
