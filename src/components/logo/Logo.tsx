import React from "react";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="logo">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
