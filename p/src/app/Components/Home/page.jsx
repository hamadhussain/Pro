'use client'
import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/page";
import { AiFillGitlab } from "react-icons/ai";
import { Link } from "react-scroll";

const Page = () => {
  return (
    <div className="  bg relative h-screen">
      <Navbar />
      <div className=" flex  lg:justify-evenly px-6 py-8 sm:px-20 lg:py-16 ">
        <div className=" relative  flex flex-col  ">
          <div>
            <h1 className="  ">
              <span className=" flex items-center text-7xl md:text-9xl sm:text-8xl">
                Digital Commerce Hub{" "}
              </span>{" "}
              {/* <span className="flex items-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Digital Commerce Hub </span> */}
              <br />
              <span className=" text-lg h2">To Ensure The Right Choice</span>
            </h1>
          </div>

          {/* <button className="flex btnn w-48 uppercase text-center bg-white">explore</button> */}
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            // offset={50}
            duration={800}
          >
            {" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm inline-flex items-center w-max">
              <span className="mr-2">Explore</span>
              <svg
                className="animate-bounce w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </button>
          </Link>

          {/* <button className="flex btnn w-48 uppercase text-center bg-white">explore</button> */}
          {/* <button className=" flex justify-start btn hover:bg-amber-300">Explore</button> */}
        </div>
        <Image
          className="hidden lg:block overflow-hidden relative bottom-4 img shadow-2xl"
          src="/Car/person2.png"
          height={100}
          width={300}
          alt="image"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        {/* <Image
          className="hidden lg:block overflow-hidden relative bottom-24 img shadow-2xl"
          src="/Car/person2.png"
          height={100}
          width={300}
          alt="image"
          style={{ maxWidth: "100%", height: "auto" }}
        /> */}
      </div>
    </div>
  );
};

export default Page;
