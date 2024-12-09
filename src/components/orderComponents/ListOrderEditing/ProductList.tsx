import React from "react";
import ProductCard from "./ProductCard";
import style from "./productList.module.css";
const ProductList = () => {
  return (
    <div className={`flex flex-col items-center justify-star gap-3 w-full h-full overflow-y-auto pl-8 ${style.productList}`}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
