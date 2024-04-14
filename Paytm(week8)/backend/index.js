const express = require('express');
const mainRouter = require('./routes/index.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);

const port = 3000;
app.listen(port, async () => {
  console.log(`App started at http://localhost:${port}`);
});
