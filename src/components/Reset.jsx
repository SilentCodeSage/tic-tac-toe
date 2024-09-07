import React from "react";
import { motion } from "framer-motion";

const Reset = () => {
  return (
    <div className="my-2">
      <motion.button
        onClick={() => window.location.reload()}
        className="px-8 py-3 rounded-lg font-bold text-2xl border-2 border-transparent bg-gradient-to-r from-green-300 to-teal-300 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0, ease: "easeInOut" }}
      >
        Restart Game
      </motion.button>
    </div>
  );
};

export default Reset;
