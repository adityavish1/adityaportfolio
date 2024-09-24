import React from 'react'
import { contactImg ,adlg} from '../../assets/Index'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiNextdotjs,SiCodechef } from "react-icons/si";

import {BsGithub} from "react-icons/bs";
function ContactLeft() {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
    <img
    className='w-full h-64 object-cover rounded-lg'
    src={adlg} alt="contactImg" />
    <div>
     <h3 className='text-3xl font-bold text-white'>Aditya Vishwakarma</h3>
     <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
     <p className='text-base text-gray-400 tracking-wide'>I am an enthsiastic MERN Stack Developer looking for job opprtunity</p>
     <p className='text-base text-gray-400 flex items-center gap-2'>Phone: <span className='text-lightText'>+91 8052575683</span></p>
     <p className='text-base text-gray-400 flex items-center gap-2'>
         Email:{" "}
         <span className='text-lightText'>ad805257@gmail.com</span>
     </p>
     <p className='text-base text-gray-400 flex items-center gap-2'>Address: <span className='text-lightText'>Lucknow UP</span></p>
    </div>
    <div className='flex flex-col gap-4'>
     <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
     <div className='flex gap-4'>
          <span className="bannerIcon">

            <a href="https://www.codechef.com/users/adityavish12" target="_blank" rel="noopener noreferrer" ><SiCodechef /></a>
          </span>
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
   </div>
  )
}

export default ContactLeft
