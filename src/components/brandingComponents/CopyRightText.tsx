import React from 'react'

const CopyRightText = () => {
  return (
    <div className="rounded-[14px] p-5 border-[1px] border-[#E6E6E6] mt-4">
      <h4 className="font-bold text-sm text-[#414141]">عبارة حقوق الحفظ</h4>
      <textarea placeholder="النص هنـا" className='rounded-lg border border-[#E8E8E8] p-4 w-full h-20 mt-4 resize-none focus:outline-[#ccc] placeholder:text-xs text-xs'/>
    </div>
  );
}

export default CopyRightText