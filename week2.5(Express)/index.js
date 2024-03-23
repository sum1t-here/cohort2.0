const express = require('express');
const app = express();

app.use(express.json());

var user = [
  {
    name: 'John',
    kidneys: [{ healthy: false }],
  },
];

app.get('/', function (req, res) {
  const johnKidneys = user[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post('/', function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: 'Done',
  });
});

app.put('/', function (req, res) {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// remove unhealthy kidneys
app.delete('/', function (req, res) {
  const newKidneys = 0;
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (user[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  user[0].kidneys = newKidneys;
  res.json({ msg: 'Done' });
});

app.listen(3000);
