import Image from "next/image";
import React from "react";
import productExample from "../../../assets/images/productExample.png";
import Delete from "../../../assets/icons/deleteProduct.svg";
const ProductCard = () => {
  return (
    <div className="relative ProductCard flex gap-5">
      <div className="deleteProduct absolute top-1 left-0 cursor-pointer">
        <Image src={Delete} alt="delete" />
      </div>
      <div className="productImg w-20 h-20 overflow-hidden rounded-lg">
        <Image
          src={productExample}
          alt="productExample"
          width={100}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="productData flex flex-col justify-between">
        <h2 className="productTitle w-[80%] text-right text-textPrimary font-normal text-sm capitalize">
          بيفار جل العناية بالعيون للحيوانات الأليفة
        </h2>
        <div className="productQty flex justify-between items-center">
          <span className="productQty-Price text-textPrimary font-normal text-xl font-sans">
            60.00 SR
          </span>
          <div className="productQty-qty flex items-center gap-4">
            <button className="rounded-lg border-[1px] w-7 h-7 border-[#E1E1E1] p-0 text-sm font-normal text-textPrimary">
              +
            </button>
            <span className="text-lg  font-normal font-sans text-center">
              2
            </span>
            <button className="rounded-lg border-[1px] w-7 h-7 border-[#E1E1E1] p-0 text-sm font-normal text-textPrimary">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
