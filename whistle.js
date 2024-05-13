const app = require('express')();

app.get('/', (req, res) => {
  if (req.headers.origin) {
    res.setHeader('access-control-allow-origin', req.headers.origin);
    res.setHeader('access-control-allow-credentials', true);
  }
  res.send('ok');
});

app.listen(1337);
