import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, updateUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle]=useState('')
    const [taskDescription, setTaskDescription]=useState('')
    const [taskDate, setTaskDate]=useState('')
    const [assignTo, setAssignTo]=useState('')
    const [category, setCategory]=useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category: category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        }

        if (userData) {
            const updatedData = userData.map(function(elem) {
                if (assignTo === elem.firstName) {
                    return {
                        ...elem,
                        tasks: [...(elem.tasks || []), newTask],
                        taskCount: {
                            ...elem.taskCount,
                            newTask: (elem.taskCount?.newTask || 0) + 1
                        }
                    }
                }
                return elem
            })
            
            updateUserData(updatedData)
            
            console.log('Task created successfully:', newTask)
            console.log('Updated employee data:', updatedData)
        }

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input
                     value={taskTitle}
                     onChange={(e)=>{
                        setTaskTitle(e.target.value)
                     }}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border -[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI design'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input
                        value={taskDate}
                        onChange={(e)=>{
                           setTaskDate(e.target.value)
                        }}
                     className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border -[1px] border-gray-400 mb-4'  type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <select
                       value={assignTo}
                       onChange={(e)=>{
                          setAssignTo(e.target.value)
                       }}
                       className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 text-white'
                       required
                    >
                        <option value="">Select Employee</option>
                        {userData && userData.map((employee, idx) => (
                            <option key={idx} value={employee.firstName} className='bg-[#1c1c1c] text-white'>
                                {employee.firstName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input
                       value={category}
                       onChange={(e)=>{
                          setCategory(e.target.value)
                       }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border -[1px] border-gray-400 mb-4'  type="text" placeholder='design, dev, etc' />
                </div>
        </div>
                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e)=>{
                           setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 ' 
                        name="" 
                        id=""
                        placeholder='Task description...'
                    ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4'>Create Task</button>
                </div>
        </form>
      </div>
  )
}

export default CreateTask
