const express = require('express');
const app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello, World!');
})

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
})
