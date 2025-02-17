const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
});

module.exports = app;

