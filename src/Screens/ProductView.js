import React, { useState, useEffect } from "react";
import Mainpage from "./Mainpage";
import axios from "axios";
import ProductTable from "./ProductTable";
import ProductModal from "./ProductModel";
import ProductCard from "./ProductCard";

function ProductView() {
  const [prev, setPrev] = useState(true);

  function handlePrev() {
    setPrev(!prev);
  }

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch product data from your API (replace with your actual API URL)
  useEffect(() => {
    axios
      .get(
        "https://api.postman.com/collections/24582109-37d97559-22b0-42e0-b592-7fd8b90b8e01",
        {
          headers: {
            "X-Api-Key": "PMAT-01GXAEX88FNRZN45AWACQ2V20F",
          },
        }
      )
      .then((response) => {
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const handleView = (product) => {
    setSelectedProduct(product);
  };

  const handleUpdate = (product) => {
    console.log("Update:", product);
  };

  const handleDelete = (productId) => {
    console.log("Delete:", productId);
  };

  return (
    <div className="bg-white h-">
      {prev ? (
        <div>
          <div className="flex w-screen">
            <div className="p-2">
              <button
                className=" bg-blue-200 text-gray-800 py-2 px-4 rounded-md hover:bg-blue-300 hover:text-gray-900"
                onClick={handlePrev}
              >
                Prev
              </button>
            </div>
            <div className=" text-3xl font-black ml-[35rem]">
              Daily Grind Coffee
            </div>
          </div>
          <div>
            <div className="container mx-auto p-4">
              <ProductTable
                products={products}
                onView={handleView}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
              <ProductModal
                product={selectedProduct}
                closeModal={() => setSelectedProduct(null)}
              />
            </div>
            <div className="py-2 space-y-6 px-8 ml-12">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      ) : (
        <Mainpage />
      )}
    </div>
  );
}

export default ProductView;
