import express from 'express';


import isIsAndInt from './isIsAndInt';


const app = express();

app.get('/task2A', (req, res) => {
var c = isIsAndInt(req.query.a) + isIsAndInt(req.query.b);
  res.send(c.toString());
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});


