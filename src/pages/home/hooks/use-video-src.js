/* app imports */
import React, { useState } from "react";

/* video imports */
import lamboVideo1Mp4 from "@appVideos/Digitalmarketting.mp4";
import lamboVideo1Webm from "@appVideos/Digitalmarketting.webm";
import lamboVideo2Mp4 from "@appVideos/instavideo.mp4";
import lamboVideo2Webm from "@appVideos/instavideo.webm";
import lamboVideo3Mp4 from "@appVideos/videoplayback.mp4";
import lamboVideo3Webm from "@appVideos/lambo-video-3.webm";
import lamboVideo4Mp4 from "@appVideos/lambo-video-4.mp4";
import lamboVideo4Webm from "@appVideos/lambo-video-4.webm";

export const useVideoSources = () => {
  let [videoSources, setVideoSources] = useState(() => {
    return [
      {
        mp4: lamboVideo2Mp4,
        webm: lamboVideo2Webm,
        title: "Direct Reach to Brands to Earn from your Content",
        description:
          "Connect over 200+ regional as well as worldwide brands to grow your reach and promote their product to grow and earn from your content.",
        specs: [
          { title: "Power(CV)/Power(KW)", description: "814 CV / 599 kW" },
          { title: "Max Speed", description: "355 km/h" },
          { title: "0-100 km/h", description: "2.80 Seconds" },
        ],
      },
      {
        mp4: lamboVideo3Mp4,
        webm: lamboVideo3Webm,
        title:
          "Local/Worldwide Discovery tool for netizens to search nearby Services/Businesses.",
        description:
          "Local Search Engine for all type of business and services which is ever ready to serve you. Search neighbourhood services so you can rely on.",
        specs: [
          { title: "Power(CV)/Power(KW)", description: "552.5bhp @ 8000rpm" },
          { title: "Max Speed", description: "325 km/h" },
          { title: "0-100 km/h", description: "3.70 Seconds" },
        ],
      },
      {
        mp4: lamboVideo1Mp4,
        webm: lamboVideo1Webm,
        title:
          " Find the Creators which target perfect audience to grow your Business",
        description:
          " Unlock over 800 content creators, celebrities and NIL athletes across 35+ content verticals on all platforms having regional as well as worldwide reach.",
        specs: [
          {
            title: "Power(CV)/Power(KW)",
            description: "780 CV (574 kW) at 8,500 rpm",
          },
          { title: "Max Speed", description: "355 km/h" },
          { title: "0-100 km/h", description: "2.80 Seconds" },
        ],
      },
    ];
  });
  return { videoSources };
};
