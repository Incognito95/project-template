const express = require('express');
const app = express();

require('./config/views')(app);

require('./routes/test.route')(app);

require('./server/server')(app);