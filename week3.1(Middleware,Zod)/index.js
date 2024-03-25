const express = require('express');
const zod = require('zod');

const app = express();

const schema = zod.array(zod.number());
app.use(express.json()); // to capture body request from postman
// it means that anything that comes after it will use the above middleware

// don't know what type of request is body so we accept a json via thisz

app.post('/health-checkup', function (req, res, next) {
  // kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  res.send({ response });
});

app.listen(3000);
