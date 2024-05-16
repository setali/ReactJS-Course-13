import { useEffect, useState } from 'react'
import request from '../tools/request'
import { removeToken, setToken, getToken } from '../tools/utils'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  function login (data) {
    setIsLoading(true)
    request('/api/login', {
      method: 'POST',
      data
    })
      .then(({ data }) => {
        setToken(data.token)
        getUser()
      })
      .finally(() => setIsLoading(false))
  }

  function getUser () {
    request('/api/user')
      .then(({ data }) => {
        setUser(data)
        setIsLoggedIn(true)
      })
      .finally(() => setIsLoading(false))
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  useEffect(() => {
    if (getToken()) {
      getUser()
    } else {
      setIsLoading(false)
    }
  }, [])

  return { user, isLoading, isLoggedIn, login, getUser, logout }
}
