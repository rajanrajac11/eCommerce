import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "../components/CartProductCard";
import TotalPrice from "../components/TotalPrice";
import { Link } from "react-router-dom";

function Cart() {
  const products = useSelector((state) => state.product.products);
  return (
    <div className="flex justify-center  bg-gray-600 p-20">
      <div className="">
        <ul className="flex-col flex w-96 gap-3">
          <Link
            to="/shop"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg w-56"
          >
            Shop More Products
          </Link>
          {products.map((product) => {
            if (product.quantity > 0) {
              return <CartProductCard {...product} />;
            }
          })}

          <TotalPrice />
        </ul>
      </div>
    </div>
  );
}

export default Cart;
