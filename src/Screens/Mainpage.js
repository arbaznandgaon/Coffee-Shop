import React, { useState } from "react";
import ProductView from "./ProductView";

function Mainpage() {
  const [table, setTable] = useState(true);
  const [main, setMain] = useState(true);

  function handleNext() {
    setTable(!table);
  }

  function handleMain() {
    setMain(!main);
  }

  return (
    <div className="">
      <div>
        {table ? (
          <div
            className="bg-cover bg-center bg-no-repeat h-[42rem] overflow-hidden"
            style={{ backgroundImage: "url('/Images/Coffee 6.webp')" }}
          >
            <div className="flex justify-between px-5 mt-4">
              <div>
                <button
                  onClick={handleMain}
                  className="bg-red-200 text-red-800 py-2 px-4 rounded-md hover:bg-red-300 hover:text-red-900 "
                >
                  Logout
                </button>
              </div>
              <div>
                <button
                  onClick={handleNext}
                  className="bg-red-300 text-red-800 py-2 px-4 rounded-md hover:bg-red-400 hover:text-red-900 "
                >
                  View Delicious Coffee
                </button>
              </div>
            </div>
          </div>
        ) : (
          <ProductView />
        )}
      </div>
    </div>
  );
}

export default Mainpage;
