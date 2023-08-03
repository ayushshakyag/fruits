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

// Function to create a copy of the original fruits array and then sort it
function getSortedFruits(sortBy) {
  const sortedFruits = [...fruits];
  sortedFruits.sort((a, b) => {
    if (sortBy === 'color') {
      return a.color.localeCompare(b.color);
    } else if (sortBy === '-color') {
      return b.color.localeCompare(a.color);
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === '-name') {
      return b.name.localeCompare(a.name);
    } else if (sortBy === 'id') {
      return a.id - b.id;
    } else if (sortBy === '-id') {
      return b.id - a.id; 
    } else {
      return a.id - b.id; 
    }
  });
  return sortedFruits;
}

app.get('/', (req, res) => {
  const sortBy = req.query.sort || 'id'; // Default sort by id if query parameter not provided
  const sortedFruits = getSortedFruits(sortBy);
  res.json(sortedFruits);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
