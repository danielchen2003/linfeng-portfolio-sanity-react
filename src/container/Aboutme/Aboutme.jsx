import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { AppWrap, MotionWrap } from "../../wrapper"
import "./Aboutme.scss"
import { urlFor, client } from "../../client"
import profile from "./WechatIMG48.jpeg"

const Aboutme = () => {
  return (
    <>
      <div className="aboutme-container">
        <h2 className="head-text">About Me</h2>
        {/* <img src="./WechatIMG48.jpeg" alt="BigCo Inc. logo" /> */}
        <div className="aboutme-content">
          <p>
            <span>Linfeng (Daniel) Chen </span> loves programming, writing,
            speaking, traveling, and Humor. He does not love talking about
            himself in the 3rd person.
          </p>
          <p>
            I graduate from a high intensive, four month, project-based,
            accredited software engineering full-time program, with a focus on
            programing languages such as React, JavaScript, mongoDB, HTML and
            CSS. Completed projects on Pokémon Go, Space Battle Game, and Recipe
            Web-App. Ability to apply 4 years of restaurant managerial
            leadership to resolve customer concerns.
          </p>
          <p>
          I am a person who has a strong passion to learn new technologies. During my studies in per scholars boot camp, I refined my skills in problem-solving teamwork and time-management, self-motivation. I will graduate at this September pressure career in front-end engineer. I'm grateful for the opportunity in the chance to apply my knowledge and experience to real-world situations as well as learn more about the software development career field.
          </p>

          <img
            src={profile}
            // height="400px"

            border="1px"
            width="60%"
            alt="profile"
          />
        </div>
      </div>
      {/* <div>
        <p style="float: left;"></p> */}
    </>
  )
}

export default MotionWrap(Aboutme, "app__aboutme")
