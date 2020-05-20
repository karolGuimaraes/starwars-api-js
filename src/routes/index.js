const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.status(200).send({
        title: "Star Wars API",
        version: "0.0.1"
    });
});

module.exports = router;