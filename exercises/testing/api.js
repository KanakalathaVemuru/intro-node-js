const express = require('express')
const morgan = require('morgan')
const { urlencoded, json } = require('body-parser')
const users = require('./users')
const app = express()

app.use(morgan('dev'))
app.use(urlencoded({extended: true}))
app.use(json())

app.get('/user/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  // should get user by given id in route param
  try {
    const user = await users.findUser(id)
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(404)
    res.end()
  }
})

app.delete('/user/:id', async (req, res) => { 
  console.log("here");
  const id = req.id
  try {
    await users.deleteUser(id)
    res.status(201).send({id})
  } catch (error) {
    res.status(404)
    res.end()
  }
})

module.exports = app
