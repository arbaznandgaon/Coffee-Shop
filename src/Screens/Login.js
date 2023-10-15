import React, { useState } from "react";

import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import { Alert } from "@mui/material";
import Mainpage from "./Mainpage";

function Login() {
  const [namelog, setNamelog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  const [log, setLog] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Name").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!namelog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || namelog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  function handlelog() {
    setLog(false);
  }

  // function handleClick(){

  //     setLogin(!login)
  //     }

  return (
    <div className="App">
      {home ? (
        <form onSubmit={handleLogin}>
          <div>
            <div className="b">
              <div
                className="bg-[url('coffee\src\Assets\Coffee 6.webp')] 
    h-screen w-[87rem] ml "
              >
                <div className="">
                  <div className="bg-black/80 h-auto mt-8 w-[28rem] mx-40 px-12 py-12 space-y-8 rounded-lg">
                    <p className="text-white font-bold text-2xl">{"LogIn"}</p>
                    <input
                      placeholder="User Name "
                      type="string"
                      className="text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]"
                      onChange={(event) => setNamelog(event.target.value)}
                    />

                    <input
                      placeholder="Password"
                      type="password"
                      className="text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]"
                      onChange={(event) => setPasswordlog(event.target.value)}
                    />

                    <div className="flex flex-col space-y-2 text-gray-600">
                      <button className="text-white bg-red-500  hover:bg-red-700 px-4 py-3 rounded-md w-[22rem] font-bold">
                        LogIn
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
                        Don't have an Account?
                        <br />
                        <button className="text-blue-800">Sign Up</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {flag && (
            <Alert color="primary" variant="danger">
              Please fill Correct Information
            </Alert>
          )}
        </form>
      ) : (
        <Mainpage />
      )}
    </div>
  );
}

export default Login;
