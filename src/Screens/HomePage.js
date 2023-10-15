import React, { useState } from "react";
import Signup from "./Login";
import Login from "./Signup";

function HomePage() {
  const [currentPage, setCurrentPage] = useState("");

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen overflow-hidden"
        style={{ backgroundImage: "url('/Images/Coffee 4.jpg')" }}
      >
        <div className=" w-screen bg-orange-200 flex justify-between items-center  h-20 px-5">
          <div>
            <img
              className="w-20 rounded-lg"
              src="https://i.pinimg.com/originals/aa/b7/20/aab720c3e8ab598e85f761ff43f31a45.jpg"
            />
          </div>

          <div className="space-x-3">
            <button
              class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigateToPage("contact")}
            >
              Login
            </button>{" "}
            <a className="font-bold">or</a>
            <button
              class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigateToPage("home")}
            >
              SignUp
            </button>
          </div>
        </div>

        <div>
          <div>
            {currentPage === "home" && <Login />}
            {currentPage === "contact" && <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
