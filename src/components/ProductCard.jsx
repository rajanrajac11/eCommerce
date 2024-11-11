import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/ProductSlice";

function ProductCard({ id, name, price, image, quantity }) {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(id));
  };
  return (
    <div className="w-80 bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
      <div className="w-full justify-center mb-4">
        <img src={image} alt={name} className="rounded-xl h-80 w-72" />
      </div>
      <h2 className="text-xl font-bold text-white ">{name}</h2>
      <div className="flex justify-between items-center">
        <span className="text-white">Price : ${price}</span>
        <span>
          <button
            onClick={addToCartHandler}
            className="p-2 bg-green-600 hover:bg-green-500 rounded-xl"
          >
            Add to Cart({quantity})
          </button>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
