const express = require('express');
const app = express();
const index = require('./routes/index');
const planet = require('./routes/planetRoute');
const port = process.env.PORT || 3000;

app.use('/', index);
app.use('/planet', planet);

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});

module.exports = app;