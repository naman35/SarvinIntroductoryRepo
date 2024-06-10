/* node module imports */
import React, { useState } from "react";
import styles from "./styles.module.css";

import { Button } from "../../MainDashboard/commons/button.tsx";

/* app imports */

const NavbarMobileView = ({ openModal = false, setOpenModal = () => {} }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <React.Fragment>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="flex flex-wrap items-center justify-between w-full mx-auto p-1 px-3.5">
          <div>
            <a href="/dashboard">
              <img
                src="https://see.fontimg.com/api/renderfont4/0WPqo/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/U0FSVklO/gracility-regular.png"
                width="70rem"
                height="70rem"
                alt="Dashboard"
              />

              {/* Your logo */}
            </a>{" "}
          </div>
          <Button
            style={{
              backgroundColor: "#e65c55",
              fontWeight: 600,
              fontSize: "14px",
              gap: "8px",
              lineHeight: "18px",
              transition: "background-color 2s",
              color: "white",
            }}
            onClick={() => setOpenModal(!openModal)}
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
            Request to Invite
          </Button>{" "}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-50 focus:outline-none "
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {openNavbar && (
            <div class="items-center justify-between w-full" id="navbar-sticky">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Product</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Features</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Resources</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Our Team</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center justify-between w-full block py-2 px-3 text-gray-500 rounded hover:bg-gray-200 hover:text-black"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Join Now</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavbarMobileView;
