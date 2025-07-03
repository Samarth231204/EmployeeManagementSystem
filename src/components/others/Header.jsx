import React, { useState } from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    //window.location.reload()
  }

  // Determine the username to display
  const getUsername = () => {
    if (props.data) {
      // For employees, show their firstName
      return props.data.firstName
    } else {
      // For admin, show "Admin"
      return "Admin"
    }
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{getUsername()} 👋🏻</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'>Log Out</button>
    </div>
  )
}

export default Header
