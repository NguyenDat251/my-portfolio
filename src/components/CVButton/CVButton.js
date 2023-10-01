import React from "react";
import "./CVButton.scss";

export default function CVButton() {
  //workaroud for process not defined
  //https://stackoverflow.com/a/70791920
  const CV_LINK = process.env.REACT_APP_CV_LINK;

  return (
    <>
      <a
        className="custom-btn"
        href={CV_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my CV
      </a>
    </>
  );
}
