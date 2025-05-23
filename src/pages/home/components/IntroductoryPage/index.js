/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Lottie from "react-lottie-player";
import MidContent from "../../../../components/MainDashboard/commons/animations/influencer.json";
import styles from "./styles.module.css";

function IntroductoryPage({
  isTabletOrMobile = false,
  openModal,
  setOpenModal = () => {},
}) {
  // important change
  return (
    <div
      style={{
        width: isTabletOrMobile && "100vw",
        height: isTabletOrMobile && "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isTabletOrMobile ? "column-reverse" : "row",
          justifyContent: isTabletOrMobile ? "space-evenly" : "space-between",
          alignItems: "center",
          position: "absolute",
          width: "100vw",
          height: "100vh",
          opacity: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://see.fontimg.com/api/renderfont4/0WPqo/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/U0FSVklO/gracility-regular.png"
            width={isTabletOrMobile ? 200 : 400}
            height={isTabletOrMobile ? 200 : 400}
            unoptimized
            style={{
              marginLeft: isTabletOrMobile ? "0rem" : "10rem",
              marginBottom: "2rem",
            }}
          />

          <img
            src="https://see.fontimg.com/api/rf5/0WPqo/ZTZkNjg2NTJkZTk0NDQ5NTkwMDA4MTIxZGRmOTJlY2EudHRm/WW91ciBQYXJ0bmVyIGluIEdyb3d0aCBhbmQgUmVhY2g/gracility-regular.png?r=fs&h=130&w=2000&fg=000000&bg=FFFFFF&tb=1&s=65"
            width={isTabletOrMobile ? 300 : 500}
            height={isTabletOrMobile ? 300 : 500}
            unoptimized
            style={{
              marginLeft: isTabletOrMobile ? "0rem" : "10rem",
              marginBottom: "1.5rem",
            }}
          />
          <img
            src="https://see.fontimg.com/api/renderfont4/MVyEB/eyJyIjoiZnMiLCJoIjo1NCwidyI6MjAwMCwiZnMiOjI3LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/IkJlIHRoZSBGaXJzdCB0byBFeHBlcmllbmNlIE91ciBFeGNpdGluZyBQcm9kdWN0Ig/breadley-sans-regular.png"
            width={isTabletOrMobile ? 300 : 500}
            height={isTabletOrMobile ? 300 : 500}
            unoptimized
            style={{
              marginLeft: isTabletOrMobile ? "0rem" : "10rem",
              marginBottom: "1rem",
            }}
          />
          <img
            src="https://see.fontimg.com/api/renderfont4/MVyEB/eyJyIjoiZnMiLCJoIjo5NiwidyI6MjAwMCwiZnMiOjQ4LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TGF1bmNoaW5nIE5leHQgTW9udGgh/breadley-sans-regular.png"
            width={isTabletOrMobile ? 300 : 500}
            height={isTabletOrMobile ? 300 : 500}
            unoptimized
            style={{
              marginLeft: isTabletOrMobile ? "0rem" : "10rem",
              marginBottom: "1rem",
            }}
          />
        </div>
        <div class="opacity-100 relative">
          <Lottie
            loop
            animationData={MidContent}
            play
            style={{
              marginTop: isTabletOrMobile ? "1rem" : "-4rem",
              width: isTabletOrMobile ? "100%" : 700,
              height: isTabletOrMobile ? 450 : 700,
              opacity: 1,
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          opacity: 0.1,
          zIndex: 10,
        }}
      >
        <div
          className={styles.imagecontainer}
          style={{
            position: "fixed",
          }}
        >
          <img
            src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2023-01/influencer%20marketing%20%281%29.jpg"
            unoptimized
            className={styles.image}
          />
        </div>
        <div className={styles.imagecontainer}>
          {" "}
          <img
            src="https://burrelles.com/wp-content/uploads/2023/01/Influencer-Marketing-2023.jpg"
            unoptimized
            className={styles.image}
          />
        </div>
        <div className={styles.imagecontainer}>
          {" "}
          <img
            src="https://sandpipercomms.com/wp-content/uploads/2022/12/A_Screenshot-2022-01-06-21.12.55-1-1024x670.png"
            className={styles.image}
          />
        </div>
        <div className={styles.imagecontainer}>
          {" "}
          <img
            src="https://jurnal-blog-assets.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/02/01150455/Jurnal_Blog_Tips-Jitu-Memilih-Influencer-yang-Tepat-Sebagai-Strategi-Pemasaran.jpg"
            unoptimized
            className={styles.image}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          opacity: 0.1,
        }}
      >
        <div className={styles.imagecontainer} style={{ marginTop: -22 }}>
          {" "}
          <img
            src="https://static.theprint.in/wp-content/uploads/2022/09/influencer.jpg"
            unoptimized
            className={styles.image}
          />
          <img
            src="https://assets-global.website-files.com/5e0bc356eae07eaf2480c9c5/62a8a2df48bf8833d67ec136_TikTok_Hero.jpg"
            unoptimized
            className={styles.image}
          />
          <img
            src="https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2022/09/Influencers_in_Advertising.jpeg"
            unoptimized
            className={styles.image}
          />
        </div>
        <div className={styles.imagecontainer} style={{ marginTop: -18 }}>
          {" "}
          <img
            src="https://img.freepik.com/free-photo/influencer-marketing-collage_23-2150851640.jpg"
            unoptimized
            className={styles.image}
          />
        </div>
        <div className={styles.imagecontainer}>
          {" "}
          <img
            src="https://www.sampoernauniversity.ac.id/wp-content/uploads/2022/12/pretty-blogger-woman-headphones-is-streaming-live-talking-about-video-games-influencer-young-woman-live-streaming_341052-157.jpg"
            unoptimized
            className={styles.image}
          />
          <img
            src="https://pingwin.nl/wp-content/uploads/2022/04/Kies-de-juiste-niche.jpeg"
            unoptimized
            className={styles.image}
          />
          <img
            src="https://www.tribedynamics.com/hubfs/Tribe%20Dynamics/Screen%20Shot%202019-10-09%20at%2011_14_58%20AM.png"
            unoptimized
            className={styles.image}
          />
        </div>
        <div className={styles.imagecontainer} style={{ marginTop: -82 }}>
          {" "}
          <img
            src="https://www.tourismtoday.gr/wp-content/uploads/2022/06/influencer.png"
            unoptimized
            className={styles.image}
          />
          <img
            src="https://www.visceralconcepts.com/wp-content/uploads/2020/02/b2b-influencer-marketing-truths-you-need-to-know.jpg"
            unoptimized
            className={styles.image}
          />
          <img
            src="https://www.digitalpiloto.com/blog/wp-content/uploads/2021/07/influencer-e-commarce-clothing-levels-1.jpg"
            unoptimized
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroductoryPage;
