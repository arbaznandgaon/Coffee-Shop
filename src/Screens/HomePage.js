import React, { useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles
// import './Carousel.css';
import Navbar from "../Components.jsx/Navbar";
import Carousel from "react-bootstrap/Carousel";

import ExampleCarouselImage from "react-bootstrap/Carousel";
import Signup from "./Login";
import Login from "./Signup";

function HomePage() {
  const [page, setPage] = useState(true);
  const [sign, setSign] = useState(true);

  function handleLog() {
    setPage(!page);
  }

  function handleSign() {
    setSign(!sign);
    
  }

  return (
    <div>
      <div>
        {page  ? (
          <div className=" w-screen flex justify-between items-center  h-12 px-5">
            <div>
              <img src="" />
            </div>
            <div>
              <button onClick={handleLog}>SignUp</button> or{" "}  <button onClick={handleSign}>Login</button>
              {/* <button onClick={handleSign}>Sign Up</button> */}
            </div>
          </div>
        ) : (
          <Login/>   
        )}
        {sign ? (
          <div></div>
        ) : (
          <Signup />
        )}
      
      </div>
      
    </div>
  );
}

export default HomePage;
