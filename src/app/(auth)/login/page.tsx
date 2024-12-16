import React from "react";
import style from "./login.module.css";
import LoginForm from "@/components/LoginComponents/LoginForm";
const page = () => {
  return (
    <div className={`${style.login}`}>
      <LoginForm />
    </div>
  );
};

export default page;
