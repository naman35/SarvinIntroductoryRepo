import MetricCard from "../commons/MetricCard";
import React from "react";
import Phonecall from "../commons/commonsvg/phonecall.svg";
import EnvelopeIcon from "../commons/commonsvg/EnvelopeSimple.svg";
import Insta from "../commons/commonsvg/insta.png";
import Tweet from "../commons/commonsvg/tweet.png";
import Ball from "../commons/commonsvg/ball.png";
import Be from "../commons/commonsvg/be.png";
import { Button } from "../commons/button.tsx";
import styles from "./styles.module.css";

function ContactForm() {
  return (
    <MetricCard>
      <div>
        <div className={styles.Heading}>Let’s get in touch!</div>
        <div className={styles.SubHeading}>
          Got questions about the Landing Page UI Kit? Our team is here to help.
          Contact us for quick and friendly support.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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

          <div style={{ width: "70%", marginTop: 70 }}>
            <div class="flex">
              <span class="rounded-e-0 inline-flex items-center rounded-s-md border border-gray-300 bg-gray-200 px-3 text-sm text-gray-900">
                <svg
                  class="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                class="w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-[#ffaa60] focus:ring-[#ffaa60] "
                placeholder="Full Name"
              />
            </div>
            <div class="relative mb-6" style={{ marginTop: 12 }}>
              <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                <svg
                  class="h-4 w-4 text-gray-500 dark:text-gray-400"
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
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-[#ffaa60] focus:ring-[#ffaa60] "
                placeholder="Email"
              />
            </div>
            <Button className={styles.Button}>Submit</Button>
          </div>
        </div>
      </div>
    </MetricCard>
  );
}

export default ContactForm;
