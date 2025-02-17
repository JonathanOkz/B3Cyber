const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: 'Tom' }, { id: 2, name: 'Jerry' }]);
});

module.exports = app;

