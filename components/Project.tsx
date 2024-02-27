"use client";
import React, { useState } from "react";
import { Tab } from "./Tab";

export function getProjectList(tab) {
  const projects =
    tab === "Project"
      ? [
          {
            name: "Web Profile Dister",
            company: "Dister part of PT Mataram Surya Visi Sinema (MSV)",
            description: "Web Company Profile For Dister",
            url: "https://dister.id/",
            technologies: ["HTML", "CSS", "JavaScript", "Codeigniter"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Aplikasi Siswa Dister",
            company: "PT Mataram Surya Visi Sinema (MSV)",
            description:
              "Redesign and development student application for dister company",
            url: "https://siswa.akademik.co.id/",
            technologies: ["HTML", "CSS", "JavaScript", "Codeigniter"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Aplikasi Guru Dister",
            company: "PT Mataram Surya Visi Sinema (MSV)",
            description:
              "Redesign and development teacher application for dister company",
            url: "https://guru.akademik.co.id/",
            technologies: ["HTML", "CSS", "JavaScript", "Codeigniter"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Company Profile For Dister Client's",
            company: "PT Mataram Surya Visi Sinema (MSV)",
            description:
              "Design and development web company profile template for dister client's",
            url: "https://guru.akademik.co.id/",
            technologies: ["HTML", "CSS", "JavaScript", "Codeigniter"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Web Profile Harmony Laundry",
            company: "Harmony Laundry",
            description:
              "Design and development web company profile for Harmony Laundry",
            url: "https://harmonylaundrys.com",
            technologies: ["next.js", "TailwindCSS"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Admin Dashboard Harmony Laundry",
            company: "Harmony Laundry",
            description:
              "Development Admin Dashboard For Recieve And Store Order In Harmony Laundry",
            url: "https://admin.harmonylaundrys.com",
            technologies: ["Laravel", "Bootstrap", "Intertia.Js"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Pos System Harmony Laundry",
            company: "Harmony Laundry",
            description:
              "Development Pos Application to take and order of kilo's laundry that integrated with admin data in Harmony Laundry",
            url: "https://admin.harmonylaundrys.com",
            technologies: ["next.js", "TailwindCSS", "Laravel"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Efishy - Smart Fish Feeder",
            company: "Self Project",
            description:
              "Smart fish feeder and smart monitoring for fish pool that integrated with internet of thing (IOT) and telegram notification",
            url: "https://admin.harmonylaundrys.com",
            technologies: ["Laravel", "TailwindCSS", "Inertia.js"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Online Ticket Booking for Mountain Climbing - Web App",
            company: "Gearberg",
            description: "Online ticket booking for mountain climbing",
            url: "https://gearberg.com",
            technologies: ["Laravel", "Bootstrap", "LiveWire"],
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
        ]
      : [
          {
            name: "Staff IT",
            company: "PT Mataram Surya Visi Sinema (MSV)",
            description: "",
            url: "https://dister.id/",
            duration: "December 2023 - February 2024",
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
          {
            name: "Internship",
            company: "PT Surya Visi Sinema (MSV)",
            description: "",
            url: "https://dister.id/",
            duration: "August 2023 - November 2023",
            imgPreview: [
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
              {
                src: "https://dister.com/assets/img/logo.png",
                alt: "Dister Logo",
              },
            ],
          },
        ];

  return projects;
}
const tabs = ["Project", "Expirience"];

function Project() {
  const [isActive, setIsActive] = useState("Project");
  const [projectList, setProjectList] = useState(getProjectList("Project"));

  const handleClick = (tab) => {
    setIsActive(tab);
    setProjectList(getProjectList(tab));
  };

  return (
    <div className="flex flex-col items-start gap-y-4 justify-center w-full">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <Tab tab={tabs} isActive={isActive} handleClick={handleClick} />
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
        {projectList != null &&
          projectList.map((project) => (
            <div className="basis-1/2 p-6 relative text-[14px] bg-gray-50  text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full min-h-52">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-[18px] font-bold text-gray-900 dark:text-yellow-500 mb-2 ">
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  className="px-2 py-1 border-white border rounded-xl text-[12px] font-thin hover:bg-white hover:text-gray-900 duration-500 ease-in-out cursor-pointer"
                >
                  Link
                </a>
              </div>
              <p className="mb-2 flex flex-col ">
                <span>{project.description}</span>
                <span>{project.company}</span>
              </p>
              {project.technologies != null && (
                <p className="text-sm absolute bottom-5 text-white grid grid-cols-3 w-full">
                  <span>{project.technologies.map((tech) => tech + " ")}</span>
                </p>
              )}
              {project.duration != null && (
                <p className="text-sm absolute bottom-5  text-white  w-full">
                  {project.duration}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Project;
