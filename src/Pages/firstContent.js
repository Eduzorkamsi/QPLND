import React from "react";
import "../styles/firstContent.css";
import Whip from "../assets/whip.png";
import Apple from "../assets/apple.png";
import Google from "../assets/google.png";
import { Button } from "antd";

const FirstContent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <text className="bold-text white-text align">
          Changing how you <br />
          do logistics
        </text>
        <img style={{ objectFit: "none" }} src={Whip} alt="whip" />

        <text className="white-text align">
          Rendering logistics with just a few clicks
        </text>
        <Button>Coming soon</Button>
        <div className="stores align">
          <img src={Apple} alt="apple" />
          <img src={Google} alt="google" />
        </div>
      </div>
    </>
  );
};

export default FirstContent;
