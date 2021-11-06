const express = require('express')
const app = express()
const port = 4000
const data = require('./data.json');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

// reset ID values of every item from data.json
for(let i = 0; i < data.items.length; i++) {
  data.items[i].id = uuidv4();
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
  res.json(data.items);
});

app.post('/products', (req, res) => {
  const newItem = {
      "id": uuidv4(),
      "name": req.body.name,
      "author": req.body.author,
      "type": "Paperback",
      "price": req.body.price,
      "rating": req.body.rating,
      "promos": [
      ]
    };
  data.items.push(newItem);
  console.log('Added new item');
  console.log(newItem)
  res.sendStatus(201);
});

app.delete('/products/:id', (req, res) => {
  const productIndex = data.items.findIndex(item => item.id === req.params.id);
  if(productIndex != -1) {
    data.items.splice(productIndex, 1);
    console.log('Deleted item id ' + req.params.id);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})