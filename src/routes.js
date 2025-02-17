



const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
	res.json([{ id: 1, name: 'SWAN' }, {id: 2, name: 'Bob' }]);
});

router.get('/users-2', (req, res) => {
	res.json([{ id: 1, name: 'Emilien' }, {id: 2, name: 'Bob' }]);
});

module.exports = router;

TEST Swan
TEST Emilien
TEST JULIEN
