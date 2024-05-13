const express = require('express');
const cors = require('cors');

let app1 = express();
app1.use(cors()); // Sensitive: by default origin is set to *

let corsOptions = {
  origin: '*' // Sensitive
};
let app2 = express();
app2.use(cors(corsOptions));
