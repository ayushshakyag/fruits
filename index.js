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
    return sortBy === 'color' ? a.color.localeCompare(b.color) : a.id - b.id;
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
