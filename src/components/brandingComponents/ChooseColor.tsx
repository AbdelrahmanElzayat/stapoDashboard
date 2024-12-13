"use client";
import React, { useState } from "react";
import style from "./settings.module.css";
const ChooseColor = () => {
  const [mainColor, setMainColor] = useState("#FCE1C6");
  const [secondColor, setSecondColor] = useState("#DBDBFF");
  return (
    <div className="chooseColors w-full md:w-auto mt-4 flex flex-wrap items-center gap-5">
      <div className="inputsColor w-full xs:w-auto flex flex-col gap-4">
        <div className="mainColor flex flex-col gap-1">
          <label className="text-xs font-normal">اللون الاساسـى</label>
          <div className="groupInputColor flex items-center gap-3">
            <input
              type="color"
              value={mainColor}
              className={style.inputColor}
              onChange={(e) => setMainColor(e.target.value)}
            />
            <input
              type="text"
              className="border-[1px] w-fit border-[#E8E8E8] rounded-[10px] h-10 px-4 text-sm font-normal font-sans text-right focus:border-[#A1A1A1] outline-none"
              placeholder="Enter Main Color"
              value={mainColor}
              onChange={(e) => setMainColor(e.target.value)}
            />
          </div>
        </div>
        <div className="secondColor flex flex-col gap-1">
          <label className="text-xs font-normal">اللون الثانوي</label>
          <div className="groupInputColor flex items-center gap-3">
            <input
              type="color"
              className={style.inputColor}
              value={secondColor}
              onChange={(e) => setSecondColor(e.target.value)}
            />
            <input
              type="text"
              className="border-[1px] border-[#e8e8e8] rounded-[10px] h-10 px-4 text-sm font-normal font-sans text-right focus:border-[#A1A1A1] outline-none"
              placeholder="Enter Second Color"
              value={secondColor}
              onChange={(e) => setSecondColor(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div
        className={`boxColor w-full border-8 rounded-2xl h-[130px] sm:w-[160px] px-[25px] py-[15px] self-end flex flex-col items-center justify-center gap-3`}
        style={{ borderColor: secondColor+'A1' }}
      >
        <div
          className="smallBox w-1/2 h-4 rounded-[10px]"
          style={{ background: secondColor }}
        ></div>
        <div
          className="largeBox rounded-[10px] w-full h-[40px]"
          style={{ background: mainColor }}
        ></div>
        <div
          className="middleBox w-full h-4 rounded-[10px]"
          style={{ background: mainColor }}
        ></div>
      </div>
    </div>
  );
};

export default ChooseColor;
