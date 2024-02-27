"use client";
import { useState } from "react";

export const Tab = ({ tab, isActive, handleClick }) => {
  // const [isActive, setIsActive] = useState("Project");

  // const handleClick = (tab) => {
  //   setIsActive(tab);
  // };
  return (
    <>
      {tab.map((mytab) => (
        <li className="me-2">
          <a
            href="#"
            onClick={() => handleClick(mytab)}
            className={
              isActive === mytab
                ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            }
          >
            {mytab}
          </a>
        </li>
      ))}
    </>
  );
};
