import React, { useEffect } from "react";
import Image from "next/image";
import { themeChange } from "theme-change";

const SideBar = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen   transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] bg-base-200">
      <div>
        <div className="-mx-6 px-6 py-4">
          <a href="#" title="home" className="flex-0 btn btn-ghost px-2">
            <div className="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
              Server Observer
            </div>
          </a>
        </div>

        <div className="mt-8 text-center">
          <img
            src="https://www.jimmieluo.com/static/image/peep.png"
            alt="avatar"
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Jim Luo
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="menu menu-compact flex flex-col p-0 px-4">
          <li>
            <a href="#" aria-label="dashboard" className="flex gap-4 active  ">
              <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                  className="fill-current text-cyan-400 dark:fill-slate-600"
                ></path>
                <path
                  d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                  className="fill-current text-cyan-200 group-hover:text-cyan-300"
                ></path>
                <path
                  d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                  className="fill-current group-hover:text-sky-300"
                ></path>
              </svg>
              <span className="-mr-1 font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Categories</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Reports</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                />
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                />
              </svg>
              <span className="group-hover:text-gray-700">Other data</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                />
                <path
                  className="fill-current text-gray-600 group-hover:text-cyan-600"
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="group-hover:text-gray-700">Finance</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center ">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
      <select data-choose-theme>
        <option value="light">Default</option>
        <option value="dark">Dark</option>
        <option value="cyberpunk">cyberpunk</option>
        <option value="retro">retro</option>
        <option value="synthwave">synthwave</option>
        <option value="lofi">lofi</option>
        <option value="pastel">pastel</option>
        <option value="fantasy">fantasy</option>
        <option value="wireframe">wireframe</option>
        <option value="emerald">emerald</option>
        <option value="cupcake">cupcake</option>
        <option value="coffee">coffee</option>
      </select>
    </aside>
  );
};

export default SideBar;
