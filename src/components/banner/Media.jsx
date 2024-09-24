import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiNextdotjs,SiCodechef } from "react-icons/si";

import {BsGithub} from "react-icons/bs";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              
              <a href="https://www.codechef.com/users/adityavish12" target="_blank" rel="noopener noreferrer" ><SiCodechef /></a>
            </span>
            {/* <span className="bannerIcon">
              
              <a href="https://codeforces.com/profile/Aditya8052" target="_blank" rel="noopener noreferrer" ><SiCodeforces/></a>
            </span> */}
            <span className="bannerIcon">
              
              <a href="https://leetcode.com/u/adityavish1/" target="_blank" rel="noopener noreferrer" ><SiLeetcode /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://github.com/adityavish1" target="_blank" rel="noopener noreferrer" ><BsGithub /></a>
            </span>
            <span className="bannerIcon">
                <a href="https://www.linkedin.com/in/aditya-vishwakarma-851531250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          {/* <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div> */}
        </div>
      </div>
  )
}

export default Media