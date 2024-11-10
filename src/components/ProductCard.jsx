import React from "react";
import documentService from "../appwrite/config";
import Button from "./Button";

function ProductCard({ id, name, price, image, quantity }) {
  return (
    <div className="w-80 bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
      <div className="w-full justify-center mb-4">
        <img src={image} alt={name} className="rounded-xl h-80 w-72" />
      </div>
      <h2 className="text-xl font-bold text-white ">{name}</h2>
      <div className="flex justify-between items-center">
        <span className="text-white">Price : ${price}</span>
        <span>
          <Button>Add to Cart {quantity}</Button>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
