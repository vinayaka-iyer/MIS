const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Working'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server Running on port: ${port}`));
