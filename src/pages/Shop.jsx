import React, { useEffect, useState } from "react";
import documentService from "../appwrite/config";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    documentService.getProducts().then((product) => {
      if (product) setProducts(product.documents);
    });
  }, []);
  if (products.length === 0) {
    return (
      <div className="w-full py-8  text-center bg-blue-50 dark:bg-gray-600 dark:text-white">
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold">No Products.</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-2">
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.$id} className="p-2 w-1/4">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
