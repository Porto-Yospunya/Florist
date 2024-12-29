// import ...
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

// import icons
import {
  IoPersonOutline as Profile,
  IoSearchOutline as Search,
  IoCartOutline as Cart,
  IoHeartOutline as Heart,
} from "react-icons/io5";

export const Navbar = () => {

  const activeProps = {
    style: {
      transition: "300ms",
      background: "gray",
      color: "white",
    },
  }

  const menuData = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Gallery",
      path: "/gallery",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative py-4 flex justify-center items-center">
        <motion.div
          className="absolute top-7 left-10 flex gap-3  items-center overflow-hidden z-[1000]"
          initial={{
            width: isOpen ? "200px" : "30px",
          }}
          animate={{
            width: isOpen ? "200px" : "30px",
          }}
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <Search className="text-[1.4rem]" />
          </button>
          <input type="text" className="px-1 w-full border-2 border-gray-400 rounded-[5px]" />
        </motion.div>
        <h1 className="text-[2rem] font-bold">Florist</h1>
        <div className="absolute top-7 right-10 text-[1.4rem] flex gap-5 z-[1000]">
          <Link to="/"><Profile /></Link>
          <Link to="/"><Heart /></Link>
          <Link to="/"><Cart /></Link>
        </div>
      </div>
      <div className="sticky flex items-center justify-center border-b-2 border-t-2 w-screen top-0 bg-white z-[999]">
        {menuData.map((item, index) => (
          <Link key={index} to={item.path} activeProps={activeProps} className="py-4 px-6">{item.label}</Link>
        ))}
      </div>
    </>
  );
}