import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="flex flex-col items-center justify-star gap-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
