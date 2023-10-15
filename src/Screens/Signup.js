import React, { useState } from "react";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import { Alert } from "@mui/material";
import Login from "./Login";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  // console.log(name)

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("saved in local storage");
      setLogin(!login);
    }
  }

  // function handleClick(){

  // setLogin(!login)
  // }

  return (
    <div>
      <div>
        {login ? (
          <form onSubmit={handleSubmit}>
            <div className="b">
              <div
                className="bg-[url('coffee\src\Assets\Coffee 6.webp')] 
h-screen w-[87rem] ml "
              >
                <div className="">
                  {/* <div className="flex justify-between ite w-screen px-6 h-16 pt-4 bg-gray-400 ">
        <img
          className=" w-12 h-12 pb-2 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkS-nAUcNdi8IR99_8qYDKZEWFrPlvCBA3xjLldpapu2RnYY&s"
        />
        <div className="space-x-2 font-bold">
          <button className="bg-transperant border px-2 py-1 text-white">
            <LanguageIcon /> English <ArrowDropDownIcon />
          </button>
        </div>
      </div> */}
                  <div className="bg-black/80 h-auto mt-8 w-[28rem] mx-40 px-12 py-12 space-y-8 rounded-lg">
                    <p className="text-white font-bold text-2xl">{"Sign Up"}</p>
                    <input
                      type="string"
                      placeholder="User Name "
                      className="text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]"
                      onChange={(event) => setName(event.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]"
                      onChange={(event) => setEmail(event.target.value)}
                    />

                    <input
                      placeholder="Password"
                      type="password"
                      className="text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]"
                      onChange={(event) => setPassword(event.target.value)}
                    />

                    <div className="flex flex-col space-y-2 text-gray-600">
                      <button className="text-white bg-red-500  hover:bg-red-700 px-4 py-3 rounded-md w-[22rem] font-bold">
                        Sign Up
                      </button>
                      <div className="flex justify-between text-xs text-slate-300">
                        <p>
                          <CheckBoxTwoToneIcon /> Remember Me{" "}
                        </p>
                        <p>Need Help</p>
                      </div>
                    </div>

                    <div className="text-slate-500 space-y-2 pt- font-semibold">
                      <p>
                        Already have an Account?
                        <br />
                        <button className="text-blue-800">Login</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {flag && (
              <Alert color="primary" variant="danger">
                Please fill every field
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default Signup;
