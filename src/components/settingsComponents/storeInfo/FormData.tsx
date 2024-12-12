import React from 'react'

const FormData = () => {
  return (
    <div className="mt-4 w-full lg:basis-1/2">
      <h5 className="text-[13px] font-normal mb-3">بيانـات المتجـر</h5>
      <form className="grid grid-cols-2 gap-[14px]">
        <input
          type="text"
          placeholder="اسم المتجـر"
          className="rounded-lg border border-[#E8E8E8] p-3 focus:outline-[#ccc] col-span-2 md:col-span-1"
        />
        <input
          type="email"
          placeholder="البريد الالكترونى"
          className="rounded-lg border border-[#E8E8E8] p-3 focus:outline-[#ccc] col-span-2 md:col-span-1"
        />
        <input
          type="text"
          placeholder="رقم الجـوال"
          className="rounded-lg border border-[#E8E8E8] p-3 focus:outline-[#ccc] col-span-2 md:col-span-1"
        />
        <textarea
          placeholder="وصف المتجـر"
          className="row-span-2 rounded-lg border border-[#E8E8E8] p-3 focus:outline-[#ccc] resize-none col-span-2 md:col-span-1"
        />
        <input
          type="text"
          placeholder="عنوان الفرع الرئيسـى"
          className="rounded-lg border border-[#E8E8E8] p-3 focus:outline-[#ccc] col-span-2 md:col-span-1"
        />
      </form>
    </div>
  );
}

export default FormData