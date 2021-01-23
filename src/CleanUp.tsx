import React, { useState, useEffect } from "react";

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState<number>(0);
  const incrementNum = () => {
    console.log("Mouse event invoked(呼び出し) !!");
    setCurrentNum((preNumber: number) => preNumber + 1);
  };
  useEffect(() => {
    console.log("useEffect in CleanUp invoked(呼び出し) !!");
    window.addEventListener("mousedown", incrementNum);
    return () => {
      console.log("Cleanup invoked !");
      window.removeEventListener("mousedown", incrementNum);
    };
  }, []);
  return <div>{currentNum}</div>;
};

export default CleanUp;
