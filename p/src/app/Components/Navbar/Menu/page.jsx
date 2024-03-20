"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Page = () => {
  const navlist = [
    { name: "Explore Our Policy", link: "test1" },
    { name: "Our Business Projects", link: "test2" },
    { name: "Contact ", link: "test3" },
  ];
  return (
    <div className=" sm:flex gap-9 hidden ">
         {navlist.map((i, k) => {
                return (
                  <div key={k} className=" flex items-center">
                    <ul>
                      <Link
                    activeClass="active"
                    to={i.link}
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={800}
                  >
                      <motion.li
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                      }}
                        whileTap={{ scale: 0.2 }}
                        className="flex flex-col justify-center items-center text-center hover:text-white  cursor-pointer"
                      >
                        {i.name}
                      </motion.li>
                      
                      </Link>
                    </ul>
                  </div>
                );
              })}                      
              <Button className=" ">Login</Button>
    </div>
  );
};

export default Page;
