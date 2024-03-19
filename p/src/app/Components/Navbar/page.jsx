import React from "react";
import { AiFillGitlab } from "react-icons/ai";
import Menu from './Menu/page'

const Page = () => {
  return (
    <div className="  flex p-6  justify-between">
      <div className=" flex items-center gap-3">
      <AiFillGitlab className=" text-2xl"/>

        <span className=" uppercase logo">Meta-Market</span> 
      </div>
      <div>
         <Menu/>
      </div>
    </div>
  );
};

export default Page;
