/* node module imports */
import React, { useState } from "react";

/* app imports */
import "./style.scss";
import { FooterSection } from "./components/footer-section.js";
import { BubbleText } from "./components/bubbleText.jsx";
import IntroductoryPage from "./components/IntroductoryPage/index.js";
import MainDashboard from "../../components/MainDashboard/index.js";
import Statistics from "../../components/MainDashboard/Statistics/index.js";
import Modal from "../../components/MainDashboard/commons/modal/index.js";

/* video imports */

export const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <>
          <div
            style={{
              height: "100vh",
              width: "100vw",
              overflow: "hidden",
              background: `url(
          "https://www.shape.com/thmb/wOxuLyW367JXtBvr62qYth23Uc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Black-Natural-Hair-Influencers-1-1e01e7bfefb84010b3d599151d806166.png"
        )`,
              opacity: 0.08,
              position: "absolute",
            }}
          ></div>
          <div style={{ position: "relative", opacity: 1, overflow: "hidden" }}>
            <a href="/">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "transparent",
                    opacity: 1,
                    border: 0,
                    margin: "34px 34px 2px 34px",
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "baseline", gap: 4 }}
                  >
                    <div
                      style={{
                        color: "#E65C55",

                        fontSize: 30,
                      }}
                    >
                      SARVIN
                    </div>
                    <i style={{ fontSize: 14 }}>
                      For Influencers and Businesses
                    </i>
                  </div>
                </span>
              </span>
              {/* Your logo */}
            </a>
            <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
              <div class="sm:mx-auto sm:w-full ">
                <h2 class="m-4 text-center text-2xl font-normal  text-gray-900">
                  Be the First to Experience Our Exciting Product
                </h2>
              </div>

              <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                  <div>
                    <div style={{ display: "flex", gap: 10 }}></div>
                    <br />
                    <label
                      for="email"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Enter your Email Id or Phone No.
                    </label>
                    <div class="mt-2">
                      <input
                        id="username"
                        name="fullname"
                        type="text"
                        autocomplete="name"
                        placeholder="Email or Phone"
                        required
                        class="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="flex w-full justify-center rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Notify Me!
                    </button>
                  </div>
                </form>
              </div>
              <div class="sm:mx-auto sm:w-full mt-4">
                <h2 class="m-4 text-center text-2xl font-thin  text-gray-900">
                  We will Notify you when we onboard ourselves
                </h2>
              </div>
            </div>
          </div>
        </>
      </Modal>
      <IntroductoryPage />
      <MainDashboard openModal={openModal} setOpenModal={setOpenModal} />

      <FooterSection />
    </>
  );
};
