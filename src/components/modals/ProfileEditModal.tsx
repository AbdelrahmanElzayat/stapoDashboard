"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import fileIcon from "../../assets/icons/UploadImgBlack.svg";
import camera from "../../assets/icons/Camera.svg";
import Image from "next/image";
export default function ProfileEditModal({ open, setOpen }: any) {
  const [preview, setPreview] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    email: Yup.string()
      .email("بريد إلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string()
      .matches(/^[0-9]{10,12}$/, "رقم الهاتف غير صالح")
      .required("رقم الهاتف مطلوب"),
    image: Yup.mixed().required("الصورة مطلوبة"),
  });

  const handleImageChange = (event: any, setFieldValue: any) => {
    const file = event.target.files[0];
    setFieldValue("image", file);
    if (file) {
      const reader: any = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const videoRef = useRef<HTMLVideoElement | null>(null); // إشارة لعنصر الفيديو
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // إشارة لعنصر الكانفاس

  // تشغيل الكاميرا فقط لالتقاط صورة
  const openCamera = async () => {
    try {
      setCameraOpen(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // التقاط صورة
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageData: any = canvas.toDataURL("image/png");
        setPreview(imageData); // حفظ الصورة للعرض
        stopCamera(); // إيقاف الكاميرا بعد التقاط الصورة
      }
    }
  };

  // إيقاف الكاميرا
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative sm:min-w-[300px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
            <Formik
              initialValues={{ name: "", email: "", phone: "", image: null }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Form Data:", values);
                setOpen(false);
              }}
            >
              {({ setFieldValue, errors, touched }) => (
                <Form className="bg-white pb-4 pt-5 px-4">
                  <div className="mt-3 text-center sm:mt-0 flex flex-col gap-3 justify-center items-center">
                    <div className=" flex items-center gap-4">
                      <button
                        type="button"
                        className="flex items-center justify-center w-20 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                        onClick={() => {
                          openCamera();
                        }}
                      >
                        <Image src={camera} alt="camera" />
                      </button>
                      {/* Preview Box */}

                      {!cameraOpen ? (
                        <div className="relative w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center bg-gray-100">
                          {preview ? (
                            <Image
                              src={preview}
                              alt="Preview"
                              width={100}
                              height={100}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <span className="text-gray-400 text-sm">
                              معاينة الصورة
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-4">
                          <video
                            ref={videoRef}
                            className="w-64 h-48 bg-black"
                          />
                          <canvas ref={canvasRef} className="hidden" />
                          <button
                            type="button"
                            className="inline-flex flex-1 justify-center rounded-lg bg-[#F5D446] py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#F5D446bc] sm:ml-3 sm:w-auto"
                            onClick={captureImage}
                          >
                            التقاط الصورة
                          </button>
                        </div>
                      )}

                      {/* Upload Icon */}
                      <label className="flex items-center justify-center w-20 h-8 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, setFieldValue)}
                          className="hidden"
                        />
                        <Image src={fileIcon} alt="upload" />
                      </label>

                      {/* Image Options */}
                    </div>
                    {errors.image && touched.image && (
                      <div className="text-red-500 text-xs">{errors.image}</div>
                    )}

                    {/* Name Field */}
                    <div className="w-full">
                      <Field
                        name="name"
                        type="text"
                        placeholder="الاسم بالكامـل"
                        className="block w-full px-3 py-3 border border-[#E8E8E8] rounded-lg shadow-sm focus:outline-none focus:ring-[#F5D446] focus:border-[#F5D446] text-xs"
                      />
                      {errors.name && touched.name && (
                        <div className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="w-full">
                      <Field
                        name="email"
                        type="email"
                        placeholder="البريـد الالكترونـى"
                        className="block w-full px-3 py-3 border border-[#E8E8E8] rounded-lg shadow-sm focus:outline-none focus:ring-[#F5D446] focus:border-[#F5D446] text-xs"
                      />
                      {errors.email && touched.email && (
                        <div className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="w-full">
                      <Field
                        name="phone"
                        type="text"
                        placeholder="رقم الجـوال"
                        className="block w-full px-3 py-3 border border-[#E8E8E8] rounded-lg shadow-sm focus:outline-none focus:ring-[#F5D446] focus:border-[#F5D446] text-xs"
                      />
                      {errors.phone && touched.phone && (
                        <div className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 py-3 flex flex-row justify-center items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex flex-1 justify-center rounded-lg bg-[#F5D446] py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#F5D446bc] sm:ml-3 sm:w-auto"
                    >
                      تأكيـد
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        setPreview(null);
                      }}
                      className="inline-flex flex-1 border-none outline-none justify-center rounded-lg bg-[#F3F6F5] py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      عودة
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
