"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

export default function EditCode({ open, setOpen }: any) {
  const [startDate, setStartDate] = useState<any>(new Date());

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative sm:min-w-[400px] h-auto transform rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white pb-4 pt-2 px-4 rounded-lg">
              <h4 className="text-right my-5 font-bold text-textPrimary capitalize text-lg">
                بيانات كود الخصم
              </h4>
              <div className="mt-3 text-right sm:mt-0 flex flex-col justify-center items-center">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="اسم كود الخصم"
                    className="rounded-lg py-3 px-4 text-sm placeholder:text-[#323232] text-right border-[1px] border-[#E8E8E8]"
                  />
                  <select
                    value="نسبة الخصم"
                    className="rounded-lg py-3 px-4 text-sm placeholder:text-[#323232] text-right border-[1px] border-[#E8E8E8]"
                  >
                    <option disabled>نسبة الخصم</option>
                    <option>5%</option>
                    <option>10%</option>
                    <option>20%</option>
                    <option>30%</option>
                    <option>40%</option>
                    <option>50%</option>
                  </select>
                  <select
                    value="فئات المنتجات"
                    className="rounded-lg py-3 px-4 text-sm placeholder:text-[#323232] text-right border-[1px] border-[#E8E8E8]"
                  >
                    <option disabled>فئات المنتجات</option>
                    <option>5%</option>
                    <option>10%</option>
                    <option>20%</option>
                    <option>30%</option>
                    <option>40%</option>
                    <option>50%</option>
                  </select>
                  <div className="relative z-50">
                    <DatePicker
                      //   selected={startDate}
                      onChange={(date: any) => setStartDate(date)}
                      placeholderText="تاريخ النهاية"
                      className="rounded-lg py-3 px-4 text-sm placeholder:text-[#323232] text-right border-[1px] border-[#E8E8E8] w-full"
                    />
                  </div>
                  <select
                    value="حالة الكود"
                    className="col-span-1 sm:col-span-2 rounded-lg py-3 px-4 text-sm placeholder:text-[#323232] text-right border-[1px] border-[#E8E8E8]"
                  >
                    <option disabled>حالة الكود</option>
                    <option>ساري</option>
                    <option>غير ساري</option>
                  </select>
                  <div className="col-span-1 sm:col-span-2 bg-gray-50 px-4 py-3 flex flex-row sm:px-6 justify-center items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="inline-flex flex-1 justify-center rounded-lg bg-[#F5D446] py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#F5D446bc]sm:ml-3 sm:w-auto"
                    >
                      تأكيـد
                    </button>
                    <button
                      type="button"
                      data-autofocus
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex flex-1 border-none outline-none justify-center rounded-lg bg-[#F3F6F5] py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      عودة
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
