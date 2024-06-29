import React from "react";
import "./Services.scss";
import gd from "./../Assets/OIP.png";
import { motion } from "framer-motion";
import mongo from "../Assets/mongo1.png";
import reactjs from "../Assets/reactjs.png";
import expressjs from "../Assets/expressjs.jpeg";
import nodejs from "../Assets/nodejs.jpg";
const Services = () => {
  const serviceAnimate = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="services"
      variants={serviceAnimate}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="side-text variants={serviceAnimate}">
        <motion.p>
          I focus on helping your brand to grow <br />
          and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="title" variants={serviceAnimate}>
        <motion.span variants={serviceAnimate}>
          <img src={gd} height={150} alt="" />
          <div>
            <b>Unique</b> Ideas <br /> <b>For Your</b> Business
          </div>
          <button>My Skillset</button>
        </motion.span>
      </motion.div>
      <motion.div className="cards-container" variants={serviceAnimate}>
        <motion.div className="card">
          <img src={mongo} height={50} width={50} alt="" />
        </motion.div>
        <motion.div className="card" variants={serviceAnimate}>
          <img src={reactjs} height={50} width={50} alt="" />
        </motion.div>
        <motion.div className="card" variants={serviceAnimate}>
          <img src={expressjs} height={50} width={50} alt="" />
        </motion.div>
        <motion.div className="card" variants={serviceAnimate}>
          <img src={nodejs} height={50} width={50} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
