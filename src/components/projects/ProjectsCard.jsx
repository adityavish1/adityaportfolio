import React from 'react'
import {BsGithub} from "react-icons/bs";
import {FaGlobe} from "react-icons/fa";

function ProjectsCard({title,des,src,techStack,projectUrl, repoUrl}) {
  return (
    <div className="w-full p-4 xl:px-8 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
    <div className="w-full h-[80%] overflow-hidden rounded-lg">
      <img
        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={src}
        alt="projects.title"
      />
    </div>
    <div className="w-full mt-5 flex flex-col  gap-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={repoUrl}><BsGithub /></a>
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href={projectUrl}><FaGlobe /></a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 my-3">
              {techStack.map((techStack, index) => (
                <h3 key={index} className="text-xs bg-gray-700 px-2 py-1 rounded-md">
                  {techStack}
                </h3>
              ))}
            </div>
           
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  </div>
  )
}

export default ProjectsCard
