"use client";
import React from "react";
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import style from "./LoginForm.module.css";
import Link from "next/link";
const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
    .required("هذا الحقل مطلوب"),
});
const LoginForm = () => {
  const handleSubmit = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="LoginForm bg-white z-50 relative rounded-2xl py-5 px-9 flex flex-col items-center justify-center gap-4 md:min-w-[400px]">
      <div className="logo">
        <Image src={logo} alt="logo" />
      </div>
      <h1 className="text-textSecondary text-lg text-center font-extrabold">
        تسجيـل الدخـول لحسابـك
      </h1>
      <Formik
        initialValues={{
          phone: "",
          Email: "",
          password: "",
          rememberDevice: false,
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="w-full flex flex-col gap-4">
            <div>
              <Field
                name="phone"
                type="text"
                placeholder="الجوال المسجل"
                className="w-full py-3 px-2 text-xs  border border-[#E8E8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div
              className={`w-full flex items-center justify-center relative ${style.loginFormTitle}`}
            >
              <span className="text-[#323232] text-xs font-normal text-center">
                او استخدم البريد الالكترونى
              </span>
            </div>
            <div>
              <Field
                name="Email"
                type="email"
                placeholder="ادخل البريد الإلكتروني"
                className="w-full py-3 px-2 text-xs  border border-[#E8E8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <Field
                name="password"
                type="password"
                placeholder="ادخل كلمة المرور"
                className="w-full py-3 px-2 text-xs  border border-[#E8E8E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.password}
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Field
                  name="rememberDevice"
                  type="checkbox"
                  className="h-4 w-4"
                />
                <label className="text-xs text-textSecondary font-normal">
                  تذكر هذا الجهاز
                </label>
              </div>
              <Link
                href={"##"}
                className="text-textSecondary text-xs underline font-normal"
              >
                نسيت كلمـة المـرور
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-textPrimary bg-[#F6D447] hover:bg-[#F5D446BC] transition-all rounded-xl font-bold text-center py-3 text-xs shadow-[0px_15px_12.5px_0px_rgba(107,_107,_107,_0.11)] backdrop-blur-sm p-6"
            >
              تسجيل الدخول
            </button>
          </Form>
        )}
      </Formik>
      <div className="text-xs text-textSecondary font-normal text-center">
        ليس لديك حساب <Link href={"##"} className="font-bold">حساب جديد</Link>
      </div>
    </div>
  );
};

export default LoginForm;
