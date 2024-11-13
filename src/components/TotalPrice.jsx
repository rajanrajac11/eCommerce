import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function TotalPrice() {
  const products = useSelector((state) => state.product.products);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = products.reduce((acc, product) => {
      return product.quantity > 0
        ? acc + product.price * product.quantity
        : acc;
    }, 0);
    setTotal(calculatedTotal);
  }, [products]);

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="font-bold text-2xl mb-4 text-gray-700">Total Price</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-400 text-white">
            <th className="px-4 py-2 border">SN</th>
            <th className="px-4 py-2 border">Item</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Price</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) => product.quantity > 0)
            .map((product, index) => (
              <tr
                key={product.id}
                className="text-gray-700 odd:bg-white even:bg-gray-100"
              >
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.quantity}</td>
                <td className="px-4 py-2 border">
                  ${product.price * product.quantity}
                </td>
              </tr>
            ))}
          <tr className="bg-gray-300 font-bold text-gray-800">
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border">Total:</td>
            <td className="px-4 py-2 border">${total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TotalPrice;
