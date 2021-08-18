const express = require('express');
const data = require('./data');
const fs = require('fs');
const app = express();

const parse = express.json();
app.use(parse);

app.get('/api/notes', (req, res) => {
  let reply = [];
  for (let key in data.notes) {
    reply.push(data.notes[key]);
  }

  return res.status(200).send(reply);
})

app.get('/api/notes/:id/', (req, res) => {
  let reply = [];
  for (let key in data.notes) {reply.push(key)};

  if (req.params.id < 0 || !Number.isInteger(req.params.id)) {
    return res.status(400).json({"error": "id must be a positive integer."});
  }

  if (!reply.includes(req.params.id)) {
    return res.status(404).json({ "error": "cannot find note with id " + req.params.id })
  }

  return res.status(200).send(data.notes[req.params.id]);
})

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ "error": "content is a required field."})
  }

  data.notes[data.nextId] = req.body;
  data.notes[data.nextId].id = data.nextId;
  data.nextId++;

  fs.writeFile('data.json', JSON.stringify(data, null, 2) , (err) => {
    if (err) {
      return res.status(500).json({ "error": "An unexpected error occurred."});
    } else return res.status(201).send(req.body);
  })
})

app.delete('/api/notes/:id', (req, res) => {
  let reply = [];
  for (let key in data.notes) { reply.push(key); }

  if (req.params.id < 0 || !Number.isInteger(req.params.id)) {
    return res.status(400).json({ "error": "id must be a positive integer."});
  }

  if (!reply.includes(req.params.id)) {
    return res.status(404).json({ "error": "cannot find note with id " + req.params.id});
  }

  delete data.notes[req.params.id];

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ "error": "An unexpected error occurred." });
    } else {
      return res.status(204).send()
    }
  })
})

app.put('/api/notes/:id', (req, res) => {
  let reply = [];
  for (let key in data.notes) { reply.push(key); }

  if (req.params.id < 0 || !Number.isInteger(req.params.id)) {
    return res.status(400).json({ "error": "id must be a positive integer." })
  }

  if (!req.body.content) {
    return res.status(400).json({ "error": "content is a required field." })
  }

  if (!reply.includes(req.params.id)) {
    return res.status(404).json({ "error": "cannot find note with id " + req.params.id });
  }

  data.notes[req.params.id].content = req.body.content;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ "error": "An unexpected error occurred." });
    } else {
      return res.status(200).json(data.notes[req.params.id]);
    }
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000.');
})
