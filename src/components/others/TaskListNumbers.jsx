import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskListNumbers = ({data}) => {
  const [userData, updateUserData] = useContext(AuthContext)

  // Get the current employee's data from context for live updates
  const getCurrentEmployeeData = () => {
    if (userData && data) {
      return userData.find(employee => employee.firstName === data.firstName) || data
    }
    return data
  }

  const currentData = getCurrentEmployeeData()

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-red-400'> 
        <h2 className='text-3xl font-semibold'>{currentData.taskCount?.newTask || 0}</h2>
        <h3 className='text-xt font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-blue-400'> 
        <h2 className='text-3xl font-semibold'>{currentData.taskCount?.completed || 0}</h2>
        <h3 className='text-xt font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-green-400'> 
        <h2 className='text-3xl font-semibold'>{currentData.taskCount?.active || 0}</h2>
        <h3 className='text-xt font-medium'>Active Task</h3>
        </div>
        <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-yellow-400'> 
        <h2 className='text-3xl font-semibold'>{currentData.taskCount?.failed || 0}</h2>
        <h3 className='text-xt font-medium'>failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
