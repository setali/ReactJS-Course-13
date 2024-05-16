import React, { useEffect } from 'react'
import UserContext from '../contexts/UserContext'
import useAuth from '../hooks/useAuth'

export default function AuthProvider ({ children }) {
  const { user, isLoading, isLoggedIn, login, getUser, logout } = useAuth()

  return (
    <UserContext.Provider
      value={{ user, isLoading, isLoggedIn, login, getUser, logout }}
    >
      {children}
    </UserContext.Provider>
  )
}
