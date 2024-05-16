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
  if (req.headers.authorization === token) {
    res.json(user)
  } else {
    res.status(403).json({
      message: 'Forbidden Error'
    })
  }
})

const articles = [
  { id: 1, title: 'Title 1', text: 'Text 1' },
  { id: 2, title: 'Title 2', text: 'Text 2' },
  { id: 3, title: 'Title 3', text: 'Text 3' },
  { id: 4, title: 'Title 4', text: 'Text 4' },
  { id: 5, title: 'Title 5', text: 'Text 5' },
  { id: 6, title: 'Title 6', text: 'Text 6' }
]

app.get('/api/article', (req, res) => {
  res.json(articles)
})

app.get('/api/article/:id', (req, res) => {
  const { id } = req.params

  const article = articles.find(el => el.id === +id)
  res.json(article)
})

app.listen(3001, () => {
  console.log('App is Running!!!')
})
