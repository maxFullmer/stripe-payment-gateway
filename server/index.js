const express = require('express');
const app = express();

app.use(express.json());

const port = 4242;
app.listen(port, () => console.log(`listening on port ${port}`))