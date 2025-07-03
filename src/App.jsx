import React, { use, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import LandingPage from './components/LandingPage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const[loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  }, [])

  const handleLogin =(email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role:'admin' }))
    }
    else if(userData ){
      const employee= userData.find((e)=>email==e.email && e.password == password)
      if(employee){
      setUser('employee')
      setloggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role:'employee',data:employee}))
    }
  }
    else{
      alert('Invalid credentials')
    }
  }

  const handleGoToLogin = () => {
    setShowLogin(true)
  }

  const handleLogout = () => {
    setUser(null)
    setShowLogin(false)
    setloggedInUserData(null)
    localStorage.removeItem('loggedInUser')
  }

  return (
    <>
      {!user && !showLogin ? (
        <LandingPage onGoToLogin={handleGoToLogin} />
      ) : !user && showLogin ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashboard changeUser={handleLogout}/>
      ) : user == 'employee' ? (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData}/>
      ) : null}
    </>
  )
  }

export default App
