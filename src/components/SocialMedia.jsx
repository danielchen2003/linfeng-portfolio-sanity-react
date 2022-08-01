import React from "react"
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs"
import { FaFacebookF, FaLinkedin } from "react-icons/fa"

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Daniel02353300" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/" target="_blank">
        <FaFacebookF />
      </a>
    </div>

    <div>
      <a
        href="https://www.Linkedin.com/in/linfeng-chen-a73105244/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/" target="_blank">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://github.com/danielchen2003" target="_blank">
        <BsGithub />
      </a>
    </div>
  </div>
)

export default SocialMedia
