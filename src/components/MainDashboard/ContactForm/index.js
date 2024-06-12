import MetricCard from "../commons/MetricCard";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Phonecall from "../commons/commonsvg/phonecall.svg";
import EnvelopeIcon from "../commons/commonsvg/EnvelopeSimple.svg";
import Insta from "../commons/commonsvg/insta.png";
import Tweet from "../commons/commonsvg/tweet.png";
import Ball from "../commons/commonsvg/ball.png";
import Be from "../commons/commonsvg/be.png";
import { Button } from "../commons/button.tsx";
import styles from "./styles.module.css";

function ContactForm({ isTabletOrMobile = false }) {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [responseText, setResponseText] = useState({});
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const isFirstRender = useRef(true);

  const API_ENDPOINT = "https://api.geoapify.com/v1/geocode/reverse?";

  const API_KEY = "apiKey=1b2a1437b0d24b1db3eef34e3768d5fd";
  useEffect(() => {
    if (!isFirstRender.current) {
      setLoading(true);
      axios
        .get(`${API_ENDPOINT}lat=${latitude}&lon=${longitude}&${API_KEY}`)
        .then((response) => {
          setResponseText(JSON.parse(response?.request?.responseText));
          setLoading(false);
          setLocation(
            String(responseText?.features?.[0]?.properties?.formatted)
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false in case of error
        });
    } else {
      // Set the flag to false after the first render
      isFirstRender.current = false;
    }
  }, [latitude, longitude]);

  const getLocation = async () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position?.coords?.latitude);
      setLongitude(position?.coords?.longitude);
    });
  };
  const onClickNotifier = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://sarvindevbackend.onrender.com/api/newsletter/enroll",
        {
          email_id: email,
          location: location,
        }
      );
      console.log(response);
      setSuccess(true);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <MetricCard>
      <div>
        <div className={styles.Heading}>Let’s get in touch!</div>
        <div className={styles.SubHeading}>
          Got questions about the Landing Page UI Kit? Our team is here to help.
          Contact us for quick and friendly support.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isTabletOrMobile ? "column-reverse" : "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", marginTop: 60 }}>
              <img src={Phonecall} alt="Phone Call" width={20} />
              <div style={{ fontSize: 16, fontWeight: 400, margin: 10 }}>
                +919690347218
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 10 }}>
              <img src={EnvelopeIcon} alt="Envelope" width={20} />
              <div style={{ fontSize: 16, fontWeight: 400, margin: 10 }}>
                sarvin.creators@gmail.com
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 24, fontWeight: 900 }}>
                Connect With Us
              </div>
              <div style={{ display: "flex", gap: 20, marginTop: 18 }}>
                <img src={Insta} alt="Instagram" width={40} />
                <img src={Ball} alt="Ball" width={40} />
                <img src={Be} alt="Be" width={40} />
                <img src={Tweet} alt="Tweet" width={40} />
              </div>
            </div>
          </div>

          <div style={{ width: "70%", marginTop: 10 }}>
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" action="#" onSubmit={onClickNotifier}>
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <label
                    for="email"
                    class="block text-sm font-medium leading-6 mt-4 gap-2 text-gray-900 "
                  >
                    Your Location
                    <div class="font-thin">
                      (Discover the Top Brands and Influencers in Your City! )
                    </div>
                  </label>
                  <div class="mt-2">
                    <button
                      type="button"
                      class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#F27430] focus:z-10 focus:ring-4 focus:ring-gray-100 "
                      onClick={() => getLocation()}
                    >
                      Click Me For Getting Your Location
                    </button>
                  </div>
                  {loading && (
                    <div role="status" class="flex justify-center">
                      <svg
                        aria-hidden="true"
                        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#F27430]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  )}
                  {responseText?.features?.[0]?.properties?.formatted}
                </div>

                <div class="flex-col w-full">
                  <button
                    type="submit"
                    class="flex justify-center mb-1 rounded-md bg-[#F27430] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MetricCard>
  );
}

export default ContactForm;
