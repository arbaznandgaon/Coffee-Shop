import React, { useState } from 'react'
import Signup from '../Screens/Login'
import Login from '../Screens/Signup'

function Navbar() {

const[page,setPage] = useState(true)
const[sign,setSign] = useState(true)



function handleLog(){

  setPage(!page)
}

function handleSign(){

  setSign(!sign)

}





  return (
    <div >
{page? (<div className=' w-screen flex justify-between items-center bg-slate-400 h-12 px-5'>
  <div>
<img src=''/>
</div>
<div>
<button onClick={handleLog}>LogIn</button> or <button onClick={handleSign}>Sign Up</button>
</div>
</div>) : ( <Signup/>) }
{
  sign? (<div className=' w-screen flex justify-between items-center bg-slate-400 h-12 px-5'>
  <div>
<img src=''/>
</div>
<div>

</div>
</div>) : (<Login/>)
}



    </div>
  )
}

export default Navbar