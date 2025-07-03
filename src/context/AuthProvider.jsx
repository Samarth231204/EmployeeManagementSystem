import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
 
    const [userData, setUserData] = useState(null)
    
    // Initialize localStorage and get data
    useEffect(()=>{
        setLocalStorage()
        const{ employees} = getLocalStorage()
        setUserData(employees)
    }, [])

    // Custom setter that also updates localStorage
    const updateUserData = (newData) => {
        setUserData(newData)
        localStorage.setItem('employees', JSON.stringify(newData))
    }

  return (
    <div>
      <AuthContext.Provider value={[userData, updateUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider


