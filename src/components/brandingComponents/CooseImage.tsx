"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImgIcon from "../../assets/icons/uploadimg.svg";
import style from "./settings.module.css";
const CooseImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [selectedFileBg, setSelectedFileBg] = useState(null);
  const [selectedNameBg, setSelectedNameBg] = useState("");
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);
    // setFieldValue("cv", file);
  };
  const handleFileBgChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFileBg(file);
    setSelectedNameBg(file.name);
    // setFieldValue("cv", file);
  };
  return (
    <div className={`${style.formGroup} w-full lg:w-auto flex flex-wrap gap-5`}>
      <div
        className={`${style.fileupload} border border-[#D0D0D0] border-dashed text-center flex flex-col items-center justify-center gap-3 rounded-[10px] h-[130px] w-full lg:w-[140px]`}
      >
        <Image src={ImgIcon} alt="upload" />
        <h3 className="text-xs font-bold capitalize text-center text-textPrimary">
          {selectedName ? selectedName : "شعار"}
        </h3>
        <p className="text-xs font-normal opacity-[.38] text-center">
          jpeg, jpg or png
        </p>
        <input
          type="file"
          name="cv"
          onChange={(event) => handleFileChange(event)}
        />
      </div>
      <div
        className={`${style.fileupload} ${style.bgupload} border border-[#D0D0D0] border-dashed text-center flex flex-col items-center justify-center gap-3 rounded-[10px] h-[130px] w-[350px]`}
      >
        <Image src={ImgIcon} alt="upload" />
        <h3 className="text-xs font-bold capitalize text-center text-textPrimary">
          {selectedNameBg ? selectedNameBg : "الخلفية"}
        </h3>
        <p className="text-xs font-normal opacity-[.38] text-center">
          jpeg, jpg or png
        </p>
        <input
          type="file"
          name="cv"
          onChange={(event) => handleFileBgChange(event)}
        />
      </div>
    </div>
  );
};

export default CooseImage;
