import React from "react";
const OrderPrice = () => {
  return (
    <div className="ProductInfo-amount w-full flex flex-col gap-3 border-b-[1px] pb-3">
      <div className="ProductInfo-amount-info w-full flex flex-col gap-2 pb-3 border-b-[1px]">
        <div className="product-price flex justify-between items-center">
          <h4 className="text-sm font-normal text-textPrimary">سعر المنتج</h4>
          <span className="text-sm font-normal text-textPrimary font-sans">
            1,000 SR
          </span>
        </div>
        <div className="product-discount flex justify-between items-center">
          <h4 className="text-sm font-normal text-textPrimary">نسبة الخصم</h4>
          <span className="text-sm font-normal text-textPrimary font-sans">
            23.0 SR
          </span>
        </div>
        <div className="product-ship flex justify-between items-center">
          <h4 className="text-sm font-normal text-textPrimary">تكلفة الشحن</h4>
          <span className="text-sm font-normal text-textPrimary font-sans">
            41.0 SR
          </span>
        </div>
      </div>
      <div className="totall-price flex justify-between items-center">
        <h4 className="font-bold text-textPrimary text-sm">أجمالي التكلفـة</h4>
        <span className="font-sans text-sm font-bold">1,057 SR</span>
      </div>
    </div>
  );
};

export default OrderPrice;
