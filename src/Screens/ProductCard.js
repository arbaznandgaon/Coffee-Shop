import React from "react";

function ProductCard() {
  return (
    <div>
      <div>
        <div className="h-40 bg-gray-200 rounded-lg font-semibold  w-screen items-center flex space-x-32">
          <div>
            <img className="w-52 rounded-lg" src="Images\Coffee 7.webp" />
          </div>
          <div className=" text-pink-500 font-serif font-semibold">18$</div>
          <div className="pl-40  text-pink-500 font-serif font-semibold">
            Healthy drink
          </div>
          <div className="pl-40  text-pink-500 font-serif font-semibold">
            Baverage
          </div>
          <div className="pl-16  text-pink-500 font-serif font-semibold">
            {" "}
            Pending
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
