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
    { id:2,nama: "SMAN 1 Bambanglipuro", jurusan: " ", duration: "2015-2018" },
  ];
  return (
    <div className="">
      <h1 className="text-2xl text-center font-semibold mb-6">Education</h1>
      {school.map((item) => {
        return (
          <div key={item.id} className=" flex flex-row justify-between gap-x-2 md:gap-x-4 text-gray-50">
              <div className="  md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-white/30 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white/30 shadow text-center">
                </div>
              </div>
              <div className= " bg-gray-700  p-4 rounded-xl my-4 shadow-md w-full">
                <h3 className="font-semibold  mb-1">{item.nama}</h3>
                <p className="leading-tight text-sm text-justify w-full">
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
