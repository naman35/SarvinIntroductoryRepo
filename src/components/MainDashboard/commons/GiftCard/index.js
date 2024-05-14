"use client";
import React from "react";

function GiftCard() {
  return (
    <div class=" mt-10 flex justify-center">
      <div class=" max-w-64 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex p-2 bg-slate-200 rounded-md">
          <img
            class="p-3 rounded-lg "
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="product image"
          />{" "}
        </div>
        <div>
          <div class="text-lg flex justify-center my-2 font-normal tracking-tight text-gray-700 ">
            Your Have Earn...
          </div>
          <div class="text-xs flex justify-center my-2 font-normal tracking-tight text-gray-700 ">
            Nike Air Pegasus '89 Men's Shoes Size 7 (Orange) + Rs 5000 Cash
          </div>
          <div class="text-sm flex justify-center my-1 font-thin tracking-tight text-gray-700 ">
            From
          </div>
          <div
            class="text-2xl flex justify-center font-thin tracking-tight"
            style={{
              color: "#E65C55",
              transition: "color 2s",
            }}
          >
            SARVIN
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
