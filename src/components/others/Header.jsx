import React, { useState } from 'react'

const Header = () => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>username 👋🏻</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-wh0ite px-5 py-2 rounded-small'>Log Out</button>
    </div>
  )
}

export default Header
