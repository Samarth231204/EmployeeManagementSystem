import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage } from './utils/LocalStorage'
import { setLocalStorage } from './utils/LocalStorage'


const App = () => {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  },)

  return (
    <>
      <Login/>
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
  }

export default App
