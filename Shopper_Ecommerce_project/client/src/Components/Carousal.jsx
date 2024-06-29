import React from "react";
import { Carousel } from "antd";
import hero from "../Assets/Hero.png";
import hero3 from "../Assets/hero3.png";
import hero4 from "../Assets/hero4.png";
const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const Carousal = () => {
    return (
        <Carousel autoplay={{ delay: 200 }} loop={true} style={{ height: "55vh", overflow: "hidden" }}>
            <div style={{ border: "none" }}>
                <img src={hero} height={350} width={1200} alt="" />
            </div>
            <div>
                <img src={hero3} height={350} width={1200} alt="" />
            </div>
            <div>
                <img src={hero4} height={350} width={1200} alt="" />
            </div>
        </Carousel>
    );
};

export default Carousal;
