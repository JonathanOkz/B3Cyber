const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
	res.json([{ id: 1, name: 'Alice' }, {id: 2, name: 'Bob' }]);
});

router.get('/users-2', (req, res) => {
	res.json([{ id: 1, name: 'Thomas' }, {id: 2, name: 'Bob' }]);
});

module.exports = router;

"Ceci va créer un conflit" -Paul
