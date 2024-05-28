/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import Lottie from "react-lottie-player";
import MidContent from "../../../../components/MainDashboard/commons/animations/influencer.json";
import styles from "./styles.module.css";

function IntroductoryPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          height: "100%",
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
            width={400}
            height={400}
            unoptimized
            style={{ marginLeft: "10rem", marginBottom: "2rem" }}
          />

          <img
            src="https://see.fontimg.com/api/renderfont4/z8xjG/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/QSBuZXcgSm91cm5leSBBd2FpdHMgeW91/darlington-demo.png"
            width={500}
            height={500}
            unoptimized
            style={{ marginLeft: "10rem", marginBottom: "2rem" }}
          />
          <img
            src="https://see.fontimg.com/api/renderfont4/MVyEB/eyJyIjoiZnMiLCJoIjo1NCwidyI6MjAwMCwiZnMiOjI3LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/IkJlIHRoZSBGaXJzdCB0byBFeHBlcmllbmNlIE91ciBFeGNpdGluZyBQcm9kdWN0Ig/breadley-sans-regular.png"
            width={500}
            height={500}
            unoptimized
            style={{ marginLeft: "10rem", marginBottom: "2rem" }}
          />
          <img
            src="https://see.fontimg.com/api/renderfont4/MVyEB/eyJyIjoiZnMiLCJoIjo5NiwidyI6MjAwMCwiZnMiOjQ4LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TGF1bmNoaW5nIE5leHQgTW9udGgh/breadley-sans-regular.png"
            width={500}
            height={500}
            unoptimized
            style={{ marginLeft: "10rem", marginBottom: "2rem" }}
          />
          {/* <div class="flex gap-2">
            <div class="relative mb-6">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xyz@gmail.com"
              />
            </div>
            <button
              type="button"
              class=" py-1 px-4 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <div class="flex align-middle gap-2">
                <div class="flex align-middle">Request an Invite</div>{" "}
                <div class="flex align-middle mt-1">
                  <FaGg />
                </div>
              </div>
            </button>
          </div> */}
          {/* <Typewriter
            options={{
              strings: [
                " Empowering Content Creators with Innovative Tools & Endless Possibilities",
              ],
              autoStart: true,
              loop: true,
            }}
          /> */}
        </div>
        <div class="opacity-100 relative">
          <Lottie
            loop
            animationData={MidContent}
            play
            style={{ width: 700, height: 700, opacity: 1 }}
          />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          opacity: 0.1,
          zIndex: 100,
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
    </>
  );
}

export default IntroductoryPage;
