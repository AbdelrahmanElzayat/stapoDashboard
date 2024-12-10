import Image from "next/image";
import React from "react";
import productExample from "../../../assets/images/productExample.png";
import Delete from "../../../assets/icons/deleteProduct.svg";
import style from "./productList.module.css";

const ProductCard = () => {
  return (
    <div className={`relative ${style.ProductCard} flex flex-wrap gap-3 md:gap-5 pb-4`}>
      <div className="deleteProduct absolute top-1 left-0 cursor-pointer">
        <Image src={Delete} alt="delete" />
      </div>
      <div className="productImg w-14 h-14 md:w-20 md:h-20 overflow-hidden rounded-lg">
        <Image
          src={productExample}
          alt="productExample"
          width={100}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="productData flex flex-col justify-between">
        <h2 className="productTitle w-[80%] text-right text-textPrimary font-normal text-xs sm:text-sm capitalize">
          بيفار جل العناية بالعيون للحيوانات الأليفة
        </h2>
        <div className="productQty flex flex-col md:flex-row justify-between items-start md:items-center">
          <span className="productQty-Price text-textPrimary font-bold text-xs sm:text-sm text-right md:text-xl font-sans">
            60.00 SR
          </span>
          <div className="productQty-qty flex items-center gap-4">
            <button className="rounded-lg border-[1px] w-5 h-5 md:w-7 md:h-7 flex items-center justify-center border-[#E1E1E1] p-0 text-sm font-normal text-textPrimary">
              +
            </button>
            <span className="text-xs sm:text-lg  font-normal font-sans text-center">
              2
            </span>
            <button className="rounded-lg border-[1px] w-5 h-5 md:w-7 md:h-7 flex items-center justify-center border-[#E1E1E1] p-0 text-sm font-normal text-textPrimary">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
