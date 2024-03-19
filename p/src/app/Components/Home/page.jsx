import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/page";
import { AiFillGitlab } from "react-icons/ai";

const Page = () => {
  return (
    <div className="  bg relative h-screen">
      <Navbar />
      <div className=" flex justify-evenly px-20 py-24 ">
        <div className=" relative  flex flex-col  ">
<div>          <h1 className=" h1">
         <span className=" flex items-center"> Digital Commerce Hub <AiFillGitlab/></span> <br />
            <span className=" text-lg h2">To Ensure The Right Choice</span>
          </h1></div>
          <button className=" flex justify-start btn">Explore</button>
        </div>
        {/* <Image
          className=" overflow-hidden img   shadow-2xl  "
          src="/Car/person.png"
          height={100}
          width={300}
          alt="image"
        /> */}
        <Image
  className="overflow-hidden relative bottom-9 img shadow-2xl"
  src="/Car/person2.png"
  height={100}
  width={400}
  alt="image"
  style={{ maxWidth: '100%', height: 'auto' }}
/>

      </div>
     </div>
  );
};

export default Page;
