const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const user = {
  name: 'Ali',
  family: 'Mousavi',
  username: 'ali',
  password: '123'
}

const token = 'sdfslknkefnasdcfmsdvbjsdvknslcas'

app.post('/api/login', (req, res) => {
  const { username, password } = req.body

  if (username === user.username && password === user.password) {
    res.json({ token })
  } else {
    res.status(401).json({
      message: 'credential data not correct'
    })
  }
})

app.get('/api/user', (req, res) => {
  console.log(req.headers.authorization)
  if (req.headers.authorization === token) {
    res.json(user)
  } else {
    res.status(403).json({
      message: 'Forbidden Error'
    })
  }
})

app.listen(3001, () => {
  console.log('App is Running!!!')
})
