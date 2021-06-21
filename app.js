require('dotenv').load()
const express = require('express')
const app = express()
let port = 3000


app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/bandung', (req, res) => {
  res.send('Hello Bandung')
})

app.get('/abcde', (req, res) => {
  // hasil = parseInt(req.params["a"])
  // console.log(hasil);
  res.send("abcde")
})

app.post('/notes', (req, res) => {
  const body = req.body;
  const note = new Note({
    name: body.name,
    text: body.text
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log("Udah berubah sebelum di build");

module.exports = app