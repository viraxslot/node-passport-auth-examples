const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ result: 'No authentication needed' });
});

module.exports = router;
