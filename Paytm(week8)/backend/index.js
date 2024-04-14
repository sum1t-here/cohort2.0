const express = require('express');
const mainRouter = require('./routes/index.js');
const cors = require('cors');

const app = express();

// Allow requests from specific origin
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1', mainRouter);

const port = 3000;
app.listen(port, async () => {
  console.log(`App started at http://localhost:${port}`);
});
