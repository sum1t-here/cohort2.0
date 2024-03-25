## Dumb way to authenticate and validate

```javascript
const express = require('express');

const app = express;

app.get('/health-checkup', function (req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.param;

  if (!(username === 'sumit' && password === 'pass')) {
    res.status(400).json({ msg: 'Something there with your input' });
    return;
  }
  if (kidneyId != 1 || kidneyId != 2) {
    res.status(400).json({ msg: 'Something there with your input' });
    return;
  }

  res.json({
    msg: 'Your kidney is good',
  });
});

app.listen(3000);
```

## Using middleware to validate

## Global Catches

```javascript
const express = require('express');

const app = express();

app.use(express.json()); // to capture body request from postman
// it means that anything that comes after it will use the above middleware

// don't know what type of request is body so we accept a json via thisz

app.post('/health-checkup', function (req, res, next) {
  // kidneys = [1,2]
  const kidneys = req.body.kidneys;
  const kidneysLength = kidneys.length;

  res.send('Your have ' + kidneysLength + 'kidneys');
});

// global catches
app.use(function (err, res, req, next) {
  res.json({
    msg: 'Something is up with our Server',
  });
});

app.listen(3000);
```

## Using Zod to validate

```javascript
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
```
