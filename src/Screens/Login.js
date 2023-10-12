import React from 'react'
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

function Login() {
  return (
    <div>
    
    <div>
    <div className="b">
      <div
        className="bg-[url('coffee\src\Assets\Coffee 6.webp')] 
    h-screen w-[87rem] ml "
      >
        <div className="">
          <div className="flex justify-between w-screen px-6 pt-4 bg-yellow-200 ">
           
            <img className="w-40  " src="url('')" />
            <div className="space-x-2 font-bold">
              <button  className="bg-transperant border px-2 py-1 text-white">
                <LanguageIcon /> English <ArrowDropDownIcon />
              </button>
              
            </div>
          </div>
          {/* <div className='bg-black/80 h-auto mt-10 w-[28rem] mx-auto px-12 py-12 space-y-8 rounded-lg'>
         <p className='text-white font-bold text-2xl'>{signup ? "Sign Up" : "Sign In"}</p>
         <input onChange={handleChange} name="email" value={Cred.email} type='email' placeholder='Email or Phone Number' className='text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]'/>
         <input onChange={handleChange} name="pass" value={Cred.pass} type='password' placeholder='Password' className='text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]'/>
          <div className='flex flex-col space-y-2 text-gray-600'>
            <button  className='text-white bg-red-600 px-4 py-3 rounded-md w-[22rem] font-bold'>Sign In</button>
            <div className='flex justify-between text-xs text-slate-300'>
                <p><CheckBoxTwoToneIcon/> Remember Me </p>
                <p>Need Help</p>
            </div>
            </div>
             
             <div className='text-slate-500 space-y-2 pt-4 font-semibold'>
                <p>This page is protected by Google <br/>reCaptche to ensure you are not a bot.<br/><span className='text-blue-800'>Learn More</span></p>
             </div>
       </div> */}
         
           
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default Login