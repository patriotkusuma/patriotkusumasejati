import React from "react";
import { LuCircleDot } from "react-icons/lu";

function TimelineEducation() {
  const school = [
    {
      id:1,
      nama: "Universitas Amikom Yogyakarta",
      jurusan: "Bachelor of Informatics",
      duration: "2018-2023",
    },
    { id:2,nama: "SMAN 1 Bambanglipuro", jurusan: "SCIENCE", duration: "2015-2018" },
  ];
  return (
    <div className="">
      <h1 className="text-xl text-center font-semibold mb-6">Education</h1>
      {school.map((item) => {
        return (
          <div key={item.id} className=" flex flex-row justify-between gap-x-2 md:gap-x-4 text-gray-50">
              <div className="  md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 dark:bg-white/30 bg-blue-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full dark:bg-gray-300 bg-blue-500 shadow text-center">
                </div>
              </div>
              <div className= " dark:bg-gray-700 bg-white/80 text-gray-700  p-4 rounded-xl my-2 shadow-md w-full">
                <h3 className="font-semibold dark:text-gray-200">{item.nama}</h3>
                <p className="dark:text-gray-400 ">{item.jurusan}</p>
                <p className="leading-tight text-sm text-justify w-full dark:text-gray-400">
                  {item.duration}
                </p>
              </div>
          </div>
        );
      })}
    </div>
  );
}

export default TimelineEducation;
