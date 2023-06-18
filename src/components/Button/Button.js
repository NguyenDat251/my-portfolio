import React from "react";
import "./Button.scss";

export default function Button(props, handleOnClick) {
  const { textBtn, colorBtn, iconBtn } = props;
  return (
    <>
      <button className="custom-btn" onClick={() => console.log("Click")}>
        {textBtn}
      </button>
    </>
  );
}
