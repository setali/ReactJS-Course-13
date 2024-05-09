import { useState } from 'react'
import request from '../tools/request'
import { removeToken, setToken } from '../tools/utils'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function login () {
    setIsLoading(true)
    request('/api/login', {
      method: 'POST',
      data: {
        username: 'ali',
        password: '123'
      }
    })
      .then(({ data }) => {
        setToken(data.token)
        getUser()
      })
      .finally(() => setIsLoading(false))
  }

  function getUser () {
    request('/api/user').then(({ data }) => {
      setUser(data)
      setIsLoggedIn(true)
    })
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  return { user, isLoading, isLoggedIn, login, getUser, logout }
}
