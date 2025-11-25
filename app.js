import Express from 'express'

const express = require("express");
const path = require("path");

const app = Express()
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});