import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
function Shop() {
  return (
    <div className="bg-gray-400 p-3 flex justify-center items-center ">
      <div className="flex flex-wrap justify-between">
        <ul className="flex flex-wrap flex-row justify-around gap-5">
          {ProductDetails.map((product) => (
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
