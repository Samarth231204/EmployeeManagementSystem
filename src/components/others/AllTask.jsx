import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, updateUserData] = useContext(AuthContext)
    console.log(userData);

  return (
    <div id='AllTask' className='bg-[#1c1c1c] p-5 mt-10 rounded'>
        <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded '>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>failed</h5>
        </div>
        <div className=''>
        {userData && userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded '>
            <h3 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h3>
            <h2 className='text-lg font-medium w-1/5 text-blue-400 '>{elem.taskCount?.newTask || 0}</h2>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount?.active || 0}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCount?.completed || 0}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount?.failed || 0}</h5>
        </div>
        })}
        </div>

    </div>
  )
}

export default AllTask
