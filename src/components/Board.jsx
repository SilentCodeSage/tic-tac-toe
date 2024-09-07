import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import { emptyArray } from "../utils/constants";
import { winningCombinations } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setHeaderText } from "../utils/appSlice";

const Board = () => {
  const [buttonContent, setButtonContent] = useState(emptyArray);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      buttonContent[a] !== "buttonContent[b]" &&
      buttonContent[b] !== "" &&
      buttonContent[c] !== "" &&
      buttonContent[a] === buttonContent[b] &&
      buttonContent[a] === buttonContent[c]
    ) {
      console.log(buttonContent[a] + " you won");
      dispatch(setHeaderText(buttonContent[a] + "  WON THE GAME"));
    }
  }
  console.log(buttonContent[0], buttonContent[1], buttonContent[2]);

  const handleClick = (index) => {
    const newButton = [...buttonContent];

    if (count % 2 === 0) {
      newButton[index] = "X";
      setButtonContent(newButton);
      setCount(count + 1);
    } else {
      newButton[index] = "O";
      setButtonContent(newButton);
      setCount(count + 1);
    }
  };

  return (
    <div className="my-2">
      <div className="grid grid-cols-3">
        {buttonContent.map((buttonText, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <button
                onClick={() => handleClick(index)}
                className="bg-white h-32 w-32 gap-2 m-1 rounded-md text-[50px] font-medium text-green-300"
              >
                {buttonText}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
