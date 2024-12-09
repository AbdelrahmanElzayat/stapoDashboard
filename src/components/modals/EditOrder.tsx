"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ProductList from "../orderComponents/ListOrderEditing/ProductList";
import ProductInfo from "../orderComponents/ListOrderEditing/ProductInfo";
import Link from "next/link";

export default function EditOrder({ open, setOpen }: any) {
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
            className="relative flex justify-start items-start sm:min-w-[70vw] h-[80vh] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="p-6 h-full">
              <ProductList />
            </div>
            <div className="p-6 h-full flex-1 flex flex-col justify-between gap-4 overflow-auto">
              <ProductInfo />
              <div className="acceptEditing w-full flex flex-col gap-4 pb-4">
                <p className="text-xs text-right font-light text-textPrimary">
                  بالاستمرار في هذا الاجراء فانت توافق على
                  <Link href="##" className="font-bold">
                    {" "}
                    الشروط و الاحكام
                  </Link>{" "}
                  و{" "}
                  <Link href="##" className="font-bold">
                    {" "}
                    سياسة الاسترجاع
                  </Link>{" "}
                  الخاصة بنا
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="w-full py-[10px] self-end rounded-lg bg-[#F5D446] font-bold text-sm text-center text-textPrimary"
                >
                  تعديل بيانات الطلب
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
