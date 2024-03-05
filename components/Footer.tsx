import React from "react";

function Footer() {
  return (
    <div className=" w-full flex flex-col gap-y-2 font-light  dark:bg-gray-800 bg-white/80 backdrop-blur-2xl md:py-2 hover:shadow-white/20 md:px-8 p-4 rounded-2xl duration-500 ease-in-out">
      <h2 className="font-bold dark:text-white/60 text-gray-700">Thanks for comming 😊</h2>
      <p className="dark:text-white/80 text-gray-700 font text-sm">
        © patriotkusuma {new Date().getFullYear()}- Made With 💖 : Inspired By{" "}
        <a
          href="https://dedepermana.vercel.app"
          className="hover:text-blue-600"
        >
          Dede Permana
        </a>
      </p>
    </div>
  );
}

export default Footer;
