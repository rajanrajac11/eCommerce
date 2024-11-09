import React from "react";
import documentService from "../appwrite/config";
import Button from "./Button";

function ProductCard({ $id, name, price, featuredImage }) {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
      <div className="w-full justify-center mb-4">
        <img
          src={documentService.getFilePreview(featuredImage)}
          alt={title}
          className="rounded-xl"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="flex justify-between items-center">
        <span>Price : {price}</span>
        <span>
          <Button>Add to Cart</Button>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;