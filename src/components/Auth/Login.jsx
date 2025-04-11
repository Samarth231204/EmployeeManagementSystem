import React, { useState } from 'react'

const Login = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('email is', email)
    console.log('password is', password) 
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit = {(e)=>{
              submitHandler(e)
            }}
             className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                required 
                className='border-2 border-emerald-600 font-medium rounded-full text-xl text-white outline-none bg-transparent py-2 px-6 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required 
                className='border-2 border-emerald-600 font-medium rounded-full mt-3 text-xl text-white outline-none bg-transparent py-2 px-6 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='border-none oultine-none hover:bg-emerald-700 bg-emerald-600 font-semibold rounded-full mt-7 text-lg text-white py-2 px-8 w-full placeholder:text-white'>Log in</button>
            </form>
        </div> 
    </div>
  )
}

export default Login
