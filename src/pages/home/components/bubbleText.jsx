import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <h2 className="relative text-center text-5xl font-thin text-dark text-indigo-300">
      {"Bubbbbbbbble text".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
      h
    </h2>
  );
};
export const BubbleText = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <Example />
    </div>
  );
};
