import react from "/src/assets/icons/react.svg";
import node from "/src/assets/icons/nodejs.svg";
import mysql from "/src/assets/icons/mysql.svg";
import js from "/src/assets/icons/js.svg";
import html from "/src/assets/icons/html.svg";
import css from "/src/assets/icons/css.svg";
import link from "/src/assets/icons/link.svg";
import leftArrow from "/src/assets/icons/left-arrow.svg";
import rightArrow from "/src/assets/icons/right-arrow.svg";
import github from "/src/assets/icons/green-github.svg";
import { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ProjectLaptop from "../Components/ProjectLaptop";

function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = projects[projectIndex];
  const projectLength = projects.length;
  const projectPreview = currentProject.projectPreview;

  const handleNavigation = (direction) => {
    setProjectIndex((prevIndex) => {
      if (direction == "previous") {
        return prevIndex == 0 ? projectLength - 1 : prevIndex - 1;
      } else {
        return prevIndex == projectLength - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section id="projects" className="py-40">
      <h1 className="desktop:ml-40 tablet:ml-5 phone:ml-3 my-5">02 My Work</h1>
      <div className="w-full flex phone:max-desktop:flex-col">
        <div className="min-w-[65%] flex flex-col justify-between gap-8 bg-black p-8 rounded-lg">
          <h2 className="">{currentProject.name}</h2>
          <div>
            <p className="opacity-50 text-white leading-relaxed">
              {currentProject.description}
              <br />
            </p>
            {currentProject.extra && (
              <p className="mt-3 text-accent-color opacity-100">
                <span className="underline">Notice:</span>{" "}
                {currentProject.extra}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center phone:max-tablet:flex-col phone:max-tablet:gap-10">
            <div className="flex gap-3 items-center">
              {currentProject.techStackIcons.map((icon) => {
                return (
                  <div className="bg-primary-color w-16 p-2 rounded-lg">
                    <img src={icon} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-10 items-end">
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  className="flex items-center gap-4 bg-primary-color p-2 rounded-lg underline w-full"
                  target="_blank"
                >
                  <p>Repository</p>
                  <div className="w-5">
                    <img src={github} alt="Github Repository link" />
                  </div>
                </a>
              )}
              {currentProject.liveSite && (
                <a
                  href={currentProject.liveSite}
                  className="flex items-center justify-between bg-primary-color p-2 rounded-lg underline w-full"
                  target="_blank"
                >
                  <p>Live Site!</p>
                  <div className="w-5">
                    <img src={link} alt="Live project link" />
                  </div>
                </a>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={() => handleNavigation("previous")}>
              <div className="w-10 rounded-full bg-primary-color p-2">
                <img src={leftArrow} alt="" />
              </div>
            </button>
            <button onClick={() => handleNavigation("next")}>
              <div className="w-10 rounded-full bg-primary-color p-2">
                <img src={rightArrow} alt="" />
              </div>
            </button>
          </div>
        </div>
        <div className="min-w-[35%]">
          <Canvas>
            <ambientLight />
            <PerspectiveCamera makeDefault position={[-6, 3, 1.2]} />
            <Center>
              <Suspense>
                <group scale={1.5} position={[0, -2, 1]}>
                  <ProjectLaptop video={projectPreview} next={projectIndex} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              target={[0, 0, 0]}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Theme Park Managment",
    description:
      "This project is a full-stack web application designed to streamline theme park management with role-based functionality for customers, employees, and admins. Customers can explore park details, register/login, and purchase tickets through an intuitive interface. Employees manage database operations, access ride and event data, and track maintenance tasks via a dedicated dashboard. Admins oversee park operations, including employee management, ticket availability, park scheduling, and weather-dependent capacity planning. The app integrates secure user authentication, real-time data updates, and robust reporting features, offering a seamless and efficient way to interact with the park's database.",
    techStackIcons: [react, node, mysql],
    liveSite: "https://gleaming-lokum-158537.netlify.app/",
    github: "https://github.com/Darrenf040/themepark",
    projectPreview: "",
    extra:
      "Please be aware that since the web app is hosted on a free tier, it may take a little longer to load the live site initially. Thank you for your patience!",
  },
  {
    name: "Weather App",
    description:
      "This project is a basic weather application built using JavaScript and Webpack. It fetches real-time weather data from a public API using asynchronous methods, allowing users to check current conditions for any location they search. The app highlights a simple, efficient design and demonstrates the seamless use of Webpack for modular JavaScript development.",
    techStackIcons: [js],
    github: "https://github.com/Darrenf040/Weather-app",
    liveSite: "",
    projectPreview: "",
  },
  {
    name: "Tic Tac Toe",
    description:
      "This project is a classic Tic Tac Toe game built with HTML, CSS, and JavaScript. It offers three difficulty levels—Easy, Medium, and Hard—providing a fun and challenging experience for players of all skill levels. The Hard mode features an unbeatable AI powered by the Minimax algorithm, ensuring optimal gameplay. The project demonstrates clean UI design, dynamic interactivity, and advanced algorithm implementation.",
    techStackIcons: [html, css, js],
    liveSite: "https://darrenf040.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Darrenf040/Tic-Tac-Toe",
    projectPreview: "",
  },
];

export default Projects;
