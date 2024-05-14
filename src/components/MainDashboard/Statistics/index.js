import React from "react";
import BgVideo from "../../../pages/assets/ForCreatorsWebsite.mp4";

function Statistics() {
  return (
    <>
      <div
        class="p-4 mb-20 bg-transparent rounded-lg md:p-8 dark:bg-gray-800"
        id="stats"
        role="tabpanel"
        aria-labelledby="stats-tab"
      >
        <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6  sm:p-8">
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
            <dd class="text-gray-600">Creators</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
            <dd class="text-gray-500">Deals</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
            <dd class="text-gray-500 ">Brands</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
            <dd class="text-gray-500 ">Audience</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">90+</dt>
            <dd class="text-gray-500 ">Cities</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
            <dd class="text-gray-500 ">Organizations</dd>
          </div>
        </dl>
      </div>
      <video autoPlay loop muted>
        <source src={BgVideo} type="video/mp4" />{" "}
      </video>
    </>
  );
}
export default Statistics;
