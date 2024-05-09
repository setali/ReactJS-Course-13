// import Cookies from 'js-cookie'

const TOKEN_NAME = 'token'

export function getToken () {
  return localStorage.getItem(TOKEN_NAME)
  //   return Cookies.get(TOKEN_NAME)
}

export function setToken (token) {
  localStorage.setItem(TOKEN_NAME, token)
  //   Cookies.set(TOKEN_NAME, token)
}

export function removeToken () {
  localStorage.removeItem(TOKEN_NAME)
  //   Cookies.remove(TOKEN_NAME)
}
