const app = require('express')();

app.get('/', (req, res) => {
  const origin = req.header('Origin');
  res.setHeader('Access-Control-Allow-Origin', origin); // Sensitive
  res.send('ok');
});

app.listen(1337);
