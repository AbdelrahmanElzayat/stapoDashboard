"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import style from "./modal.module.css";
import Image from "next/image";
import PointShreek from "../../assets/images/pointShreek.png";
import Arrow from "../../assets/icons/arrowProfile.svg";
import { useState } from "react";
import ProfileEditModal from "./ProfileEditModal";

export default function ProfileModal({ open, setOpen }: any) {
  const [openProfileEditModal, setOpenProfileEditModal] = useState(false);
  const openEditModal = () => {
    setOpenProfileEditModal(true);
  };
  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-[45]">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className={`${style.profileModal} absolute top-[5rem] lg:top-14 xs:left-10 sm:min-w-[300px] transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95`}
            >
              <div className={`bg-white pb-4 pt-5 p-4 ${style.profileAmount}`}>
                <div
                  className={`${style.points} p-3 flex justify-center items-center gap-8 flex-wrap`}
                >
                  <div className={`pointspox flex items-center gap-4`}>
                    <div className="shreekImg rounded-xl bg-[#FDE6C3] flex items-center justify-center px-3 py-6">
                      <Image
                        src={PointShreek}
                        alt="points"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="pointsContent flex flex-col items-center justify-center text-center gap-1">
                      <h2 className="font-extrabold text-sm text-[#000]">
                        نقاط شريـك
                      </h2>
                      <span className="text-textPrimary text-xs font-light">
                        5000 نقطه
                      </span>
                      <span className="py-1 px-3 bg-[#D8BD94] text-white text-xs font-normal rounded-2xl">
                        البلاتينـى
                      </span>
                    </div>
                  </div>
                  <div
                    className={`balance rounded-xl border border-[#D2D2D2] py-3 px-10 flex flex-col justify-center items-center`}
                  >
                    <h3 className="font-extrabold text-textPrimary">رصيدك</h3>
                    <span className="font-extrabold text-lg text-textPrimary">
                      35,000 SR
                    </span>
                  </div>
                </div>
                <div
                  className={`${style.profileTypes} rounded-2xl bg-white py-3 px-4 flex justify-between items-center mt-3`}
                >
                  <div
                    className={`${style.type} flex flex-col justify-center items-center gap-2`}
                  >
                    <h4 className="text-xs font-normal text-textPrimary">
                      الكلاسيك
                    </h4>
                    <span className="text-xs text-textPrimary font-normal bg-[#F3F6F5] rounded-xl px-3 py-1">
                      8000
                    </span>
                  </div>
                  <div
                    className={`${style.type} flex flex-col justify-center items-center gap-2`}
                  >
                    <h4 className="text-xs font-normal text-textPrimary">
                      البلاتينـى
                    </h4>
                    <span className="text-xs text-textPrimary font-normal bg-[#F3F6F5] rounded-xl px-3 py-1">
                      24000
                    </span>
                  </div>
                  <div
                    className={`${style.type} flex flex-col justify-center items-center gap-2`}
                  >
                    <h4 className="text-xs font-normal text-textPrimary">
                      الماسـى
                    </h4>
                    <span className="text-xs text-textPrimary font-normal bg-[#F3F6F5] rounded-xl px-3 py-1">
                      48000
                    </span>
                  </div>
                </div>
                <div className="btns flex flex-row justify-center items-center gap-3 mt-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className=" justify-center rounded-lg bg-[#F5D446] py-2 px-4 md:px-6 text-xs md:text-sm font-semibold text-black shadow-sm hover:bg-[#F5D446bc]"
                  >
                    سحب الرصيد
                  </button>
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpen(false)}
                    className="flex-grow  border border-[#C5C5C5] outline-none justify-center rounded-lg bg-[#F3F6F5] py-2 text-xs md:text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    إضافة النقاط بالرصيد
                  </button>
                </div>
              </div>
              <div
                className={`profileDetails group cursor-pointer flex justify-between items-center mt-4 px-4`}
                onClick={openEditModal}
              >
                <div className="profileDetails-text flex flex-col items-start gap-1">
                  <h4 className="font-semibold text-sm text-textPrimary">
                    ملفك الشخصي
                  </h4>
                  <span className="font-normal text-sm text-textPrimary">
                    عرض أو تعديل تفاصيل ملفك الشخصي
                  </span>
                </div>
                <div className="group-hover:animate-bounce">
                  <Image src={Arrow} alt="profile" className="rotate-180 " />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <ProfileEditModal
        open={openProfileEditModal}
        setOpen={setOpenProfileEditModal}
      />
    </>
  );
}
