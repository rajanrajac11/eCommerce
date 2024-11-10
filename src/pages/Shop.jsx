import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
function Shop() {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="bg-gray-400 p-3 flex justify-center items-center ">
      <div className="flex flex-wrap justify-between">
        <ul className="flex flex-wrap flex-row justify-around gap-5">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Shop;
