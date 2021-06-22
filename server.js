const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const { User } = require("./database/index")
const bp = require("body-parser")

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("<h2>Hello from server!!</h2>")
})

app.get("/users", async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (e) {
    res.status(400).send(e)
  }
})


app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    res.send(newUser)
  } catch (e) {
    res.status(400).send(e)
  }
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))