import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function TotalPrice() {
  const products = useSelector((state) => state.product.products);
  const [total, setTotal] = useState(0);
  let [index, setIndex] = useState(0);
  useEffect(() => {
    const calculatedTotal = products.reduce((acc, product) => {
      return product.quantity > 0
        ? acc + product.price * product.quantity
        : acc;
    }, 0);
    setTotal(calculatedTotal);
  }, [products]);
  return (
    <div className="bg-gray-300 p-2 rounded-xl flex flex-col justify-center items-center">
      <h2 className="font-bold text-xl ">Total Price</h2>
      <table className="text-center" cellPadding={7} border={1}>
        <tr>
          <th>SN</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {products
          .filter((product) => product.quantity > 0)
          .map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price * product.quantity}</td>
              </tr>
            );
          })}
        <tr>
          <td></td>
          <td></td>
          <td>Total:</td>
          <td>${total}</td>
        </tr>
      </table>
    </div>
  );
}

export default TotalPrice;
