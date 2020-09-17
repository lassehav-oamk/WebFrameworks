const express = require('express')
const app = express()
const port = 4000
const data = require('./data.json');
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.json(data.items);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})