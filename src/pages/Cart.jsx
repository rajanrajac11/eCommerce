import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";

function Cart() {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="flex justify-center  bg-gray-600 p-20">
      <div className="">
        <ul className="flex-col flex w-96 gap-3">
          {products.map((product) => {
            if (product.quantity > 0) {
              return <CartProductCard {...product} />;
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
