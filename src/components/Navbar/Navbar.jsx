import React, { useState } from "react";
import { MdComputer, MdMenu } from "react-icons/md";
import { NavbarMenu } from "../../Data/data";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "motion/react";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      >
        <div className="container flex justify-between items-center py-6">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>
          {/* menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* cta section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Sign In</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">Register</button>
          </div>
          {/* mobile section */}
          <div className="lg:hidden" onClick={()=>{setIsOpen(!isOpen)}}>
            <MdMenu className="text-xl"/>
          </div>
        </div>
      </motion.div>
      <ResponsiveMenu isOpen={isOpen}/>
    </div>
  );
};

export default Navbar;
