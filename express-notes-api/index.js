const express = require('express');
const data = require('./data');
const app = express();

const parse = express.json();
app.use(parse);

app.get('/api/notes', (req, res) => {
  res.status(200);
  let reply = [];
  for (let key in data.notes) {
    reply.push(data.notes[key]);
  }
  return res.send(reply);
})

app.get('/api/notes/:id/', (req, res) => {
  let reply = [];
  for (let key in data.notes) {reply.push(key);}
  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400)
    return res.json({"error": "id must be a positive integer"});
  }
  if (!reply.includes(req.params.id)) {
    res.status(404);
    return res.json({ "error": "cannot find note with id " + req.params.id })
  }
  res.status(200);
  return res.send(data.notes[req.params.id]);
})

app.listen(3000, () => {
  console.log('Listening on port 3000.');
})
