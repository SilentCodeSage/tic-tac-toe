import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Header = () => {
  const headText = useSelector((store) => store.app.headerText);
  console.log(headText);
  return (
    <div className="my-2">
      <motion.h1
        className="text-green-900 text-opacity-50 font-bold text-[50px] transition-all duration-500 ease-in-out"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {headText}
      </motion.h1>
    </div>
  );
};

export default Header;
