'use client'
import { ThemesType } from "@/utils/types/HeaderInfoType";
import React, { useState } from "react";

interface themeprops {
  theme: ThemesType;
}

const ThemeCard = ({ theme }: themeprops) => {
  const hexToRgb = (hex: any) => {
    if (!hex) return "0, 0, 0"; // لون افتراضي في حالة غياب اللون
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  const mainColorRgb = hexToRgb(theme?.mainColor);
  return (
    <div
      className="bg-white rounded-2xl p-1"
      style={{
        border: theme?.selected ? "1px solid #F5D446" : "none",
      }}
    >
      <div
        className={`boxColor cursor-pointer rounded-2xl h-[100px]  px-[25px] py-[15px] self-end flex flex-col items-center justify-center gap-3`}
        style={{
          background: `rgba(${mainColorRgb}, 0.1)`,
        }}
      >
        <div
          className="smallBox w-1/2 h-4 rounded-[10px]"
          style={{ background: theme?.secondColor }}
        ></div>
        <div
          className="largeBox rounded-[10px] w-full h-[80px]"
          style={{ background: theme?.mainColor }}
        ></div>
        <div
          className="middleBox w-full h-4 rounded-[10px]"
          style={{ background: theme?.secondColor }}
        ></div>
      </div>
    </div>
  );
};

export default ThemeCard;
