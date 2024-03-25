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
<img width="892" alt="Screenshot 2024-03-25 at 10 36 26 AM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/165c6208-3c08-47da-b322-e2503c33611a">


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
- not passing values
  
<img width="892" alt="Screenshot 2024-03-25 at 12 37 04 PM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/675585b9-0e80-4646-be69-6f9468b2c1c9">

- passing required values

<img width="892" alt="Screenshot 2024-03-25 at 12 38 49 PM" src="https://github.com/sum1t-here/cohort2.0/assets/126807055/40b374fc-d4b2-4e90-bc2f-a5cc964798e7">
