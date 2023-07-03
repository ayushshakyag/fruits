const express = require('express');
const app = express();

class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

const fruits = [
  new Fruit(1, 'Grape', 'Purple'),
  new Fruit(2, 'Banana', 'Yellow'),
  new Fruit(3, 'Orange', 'Orange'),
  new Fruit(4, 'Mango', 'Green'),
];

app.get('/', (req, res) => {
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  res.json(sortedFruits);
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});