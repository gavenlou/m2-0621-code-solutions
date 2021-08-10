const express = require('express');
const app = express();
let grades = {};
let gradeID = 0;


app.get('/api/grades', (req, res) => {
  let reply = [];
  for (prop in grades) {
    reply.push(grades[prop]);
  }
  res.json(reply);
})

const parser = express.json();
app.use(parser);

app.post('/api/grades', (req, res) => {
  req.body.id = gradeID;
  grades[gradeID] = req.body;
  gradeID++;
  res.status(201);
  res.send(req.body);
})

app.listen(3000, () => {
  console.log('Listening on port 3000.');
})
