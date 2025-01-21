/* app imports */
import { useState } from "react";

/* video imports */

import lamboVideo1Mp4 from "@appVideos/Digitalmarketting.mp4";
import lamboVideo1Webm from "@appVideos/Digitalmarketting.webm";
import lamboVideo2Mp4 from "@appVideos/instavideo.mp4";
import lamboVideo2Webm from "@appVideos/instavideo.webm";
import lamboVideo3Mp4 from "@appVideos/videoplayback.mp4";
import lamboVideo3Webm from "@appVideos/lambo-video-3.webm";

export const useVideoSources = () => {
  let [videoSources, setVideoSources] = useState(() => {
    return [
      {
        mp4: lamboVideo2Mp4,
        webm: lamboVideo2Webm,
        title: "Connecting Influencers With Brands In a Effortless Way",
        description:
          "Businesses and influencers can easily discover and connect with each other through a smart matching algorithm, ensuring effective, tailored partnerships for marketing success and growth",
        specs: [
          {
            title: "Total Influencers Joined",
            description: "534",
          },
          {
            title: "Total Brands Joined",
            description: "126",
          },
          {
            title: "Total Deals On Way",
            description: "53",
          },
        ],
      },
      {
        mp4: lamboVideo3Mp4,
        webm: lamboVideo3Webm,
        title: "Choose your Favorite Partner",
        description:
          "Businesses set budgets, receive bids, and manage influencer collaborations, while influencers gain access to new monetization opportunities through exclusive deals and content partnerships",
        specs: [
          {
            title: "Average Influencer Joined Per City",
            description: "834",
          },
          {
            title: "Average Brands Joined Per City",
            description: "226",
          },
          {
            title: "Total Deals Completed Per City",
            description: "531",
          },
        ],
      },
      {
        mp4: lamboVideo1Mp4,
        webm: lamboVideo1Webm,
        title: "Let's grow together!",
        description:
          "We ensures both influencers and brands grow by creating meaningful collaborations that help influencers to earn and expand their reach and business to boost it's brand with tailored marketing strategy.",
        specs: [
          {
            title: "Average Increament of Reach of Influencers in Month",
            description: "34+",
          },
          {
            title: "Average Increase on Business Revenue",
            description: "12k/Month",
          },
          {
            title: "Total Ads Posted on Social Media",
            description: "5323",
          },
        ],
      },
    ];
  });
  return { videoSources };
};
