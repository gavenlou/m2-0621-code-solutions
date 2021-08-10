const express = require('express');
let grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}

const app = express();

app.get('/api/grades', (req, res) => {
  let reply = [];
  for (prop in grades) {
    reply.push(grades[prop]);
  }
  res.json(reply);
});

app.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  res.sendStatus(204);
})

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
})
