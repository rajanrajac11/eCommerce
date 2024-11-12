import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/ProductSlice";

function CartProductCard({ id, price, name, quantity, image }) {
  const dispatch = useDispatch();
  function increaseCartHandler() {
    dispatch(addToCart(id));
  }
  function decreaseCartHandler() {
    dispatch(removeFromCart(id));
  }
  return (
    <div className="flex justify-center items-center p-2 bg-gray-400 rounded-xl">
      <div className="flex justify-around w-80 items-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-28 rounded-xl bg-gray-700 p-1"
        />
        <div className="flex flex-col gap-2 font-serif">
          <strong className="text-xl">{name}</strong>
          <span className="text-lg">Price: ${price}</span>
          <div className="flex flex-row gap-3 justify-around text-xl">
            <button
              onClick={decreaseCartHandler}
              className="bg-red-600 p-1 rounded-full h-full w-16 hover:bg-red-500 font-bold"
            >
              -
            </button>
            <span className="font-bold">{quantity}</span>
            <button
              onClick={increaseCartHandler}
              className="bg-green-600 p-1 rounded-full h-full w-16 hover:bg-green-500"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
