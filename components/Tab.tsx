"use client";
import { useState } from "react";

type tabDescribableFunction = {
  tab: Array<string>;
  isActive: string;
  handleClick: any;
};

export const Tab = (fn: tabDescribableFunction) => {
  // const [isActive, setIsActive] = useState("Project");

  // const handleClick = (tab) => {
  //   setIsActive(tab);
  // };
  return (
    <>
      {fn.tab.map((mytab, index) => (
        <li className="me-2" key={index}>
          <a
            href="#"
            onClick={() => fn.handleClick(mytab)}
            className={
              fn.isActive === mytab
                ? "inline-block p-4 text-white border-b-2 border-white rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                : "inline-block p-4 text-blue-300 border-b-2 border-transparent rounded-t-lg hover:text-white duration-500 hover:border-gray-300 dark:hover:text-gray-300"
            }
          >
            {mytab}
          </a>
        </li>
      ))}
    </>
  );
};
