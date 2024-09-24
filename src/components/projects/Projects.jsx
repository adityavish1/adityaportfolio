import React from 'react'
import { c1, m1, p4 } from "../../assets/Index";
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
function Projects() {
  return (
    <section
      id="projects"
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex flex-col gap-10'>

        <div className='flex justify-center items-center text-center'>
          <Title
            title="Visit my Portfolio and keep Your Feedback"
            des="My Projects"
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 xl:gap-14 lg:px-16'>
          <ProjectsCard
            title="Dynamic Portfolio Website"
            des=" Developed a dynamic portfolio website by integrating InternPe API for data retrieval using JavaScript async/await and the useContext hook. Managed state via Context.Provider and built sections like Hero, About, Services, Testimonials, and Contact. Leveraged Framer Motion, react-scroll, react-slick, react-icons, and react-slider for interactivity. Applied custom Tailwind CSS for full responsiveness."
            src={p4}
            techStack={['React.js', 'Tailwind CSS', 'Javascript', 'HTML','Framer Motion']}
            projectUrl="https://the-portfolyo-assignment-seven.vercel.app/"
            repoUrl="https://github.com/adityavish1/ThePortfolyoAssignment"
          />
          <ProjectsCard
            title=" Movie Streaming Platform "
            des="Developed a MERN-based movie streaming platform with features like movie details (name, release year, plot, ratings, banners, and streaming availability). Built an API with Node.js and Express.js for fetching movie details. Implemented responsive pages for sign-up, sign-in, movies, series, watch, and search. Integrated React.js for frontend, Tailwind CSS for styling, React Player for video playback, MongoDB for database, JWT for authentication, and cookies for session management. Used Postman for API testing and React Router for navigation."
            src={m1}
            techStack={['React.js', 'JavaScript', 'Node.js', 'Express.js', 'JWT', 'MongoDB', 'Tailwind CSS']}
            projectUrl="https://movie-5ln2.onrender.com/"
            repoUrl="https://github.com/adityavish1/movie"
          />
          <ProjectsCard
            title="Chatting App"
            des=" Developed a chat application enabling text communication for multiple users, using the MERN stack with Node.js and Express.js for backend functionality.Implemented JWT authentication for security, Socket.io for real-time messaging, React.js for frontend development, MongoDB for database storage, and Tailwind CSS for styling.Utilized JavaScript async/await for efficient asynchronous operations. The application features login, logout, sign-up pages, and a home page displaying user accounts and chats."
            src={c1}
            techStack={['React.js', 'JavaScript', 'Node.js', 'Express.js', 'Socket.io', 'JWT', 'MongoDB', 'Tailwind CSS']}
            projectUrl="https://chat-app-lah2.onrender.com/login"
            repoUrl="https://github.com/adityavish1/Chat-App"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
