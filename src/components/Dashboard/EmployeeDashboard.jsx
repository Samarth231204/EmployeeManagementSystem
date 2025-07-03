import React, { useContext } from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {
  const [userData, updateUserData] = useContext(AuthContext)

  // Function to update task status
  const updateTaskStatus = (taskIndex, newStatus) => {
    if (userData) {
      const updatedData = userData.map(employee => {
        if (employee.firstName === props.data.firstName) {
          const updatedTasks = [...employee.tasks]
          const task = updatedTasks[taskIndex]
          
          // Store the previous status before resetting
          const previousStatus = task.active ? 'active' : 
                               task.newTask ? 'newTask' : 
                               task.completed ? 'completed' : 
                               task.failed ? 'failed' : null
          
          console.log('Previous status:', previousStatus, 'New status:', newStatus)
          
          // Reset all status flags
          task.active = false
          task.newTask = false
          task.completed = false
          task.failed = false
          
          // Set new status
          if (newStatus === 'active') {
            task.active = true
          } else if (newStatus === 'completed') {
            task.completed = true
          } else if (newStatus === 'failed') {
            task.failed = true
          }
          
          // Update task counts
          const taskCount = { ...employee.taskCount }
          
          console.log('Before update - taskCount:', taskCount)
          
          // Decrease previous status count
          if (previousStatus === 'active') {
            taskCount.active = Math.max(0, (taskCount.active || 0) - 1)
          } else if (previousStatus === 'newTask') {
            taskCount.newTask = Math.max(0, (taskCount.newTask || 0) - 1)
          } else if (previousStatus === 'completed') {
            taskCount.completed = Math.max(0, (taskCount.completed || 0) - 1)
          } else if (previousStatus === 'failed') {
            taskCount.failed = Math.max(0, (taskCount.failed || 0) - 1)
          }
          
          // Increase new status count
          if (newStatus === 'active') {
            taskCount.active = (taskCount.active || 0) + 1
          } else if (newStatus === 'completed') {
            taskCount.completed = (taskCount.completed || 0) + 1
          } else if (newStatus === 'failed') {
            taskCount.failed = (taskCount.failed || 0) + 1
          }
          
          console.log('After update - taskCount:', taskCount)
          
          return {
            ...employee,
            tasks: updatedTasks,
            taskCount: taskCount
          }
        }
        return employee
      })
      
      updateUserData(updatedData)
    }
  }
  
  return (
    <div className='p-10 bg-gradient-to-br from-[#1c1c1c] via-emerald-900 to-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data} updateTaskStatus={updateTaskStatus}/>
    </div>
  )
}

export default EmployeeDashboard
