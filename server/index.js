const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/Page');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/myApp`);

app.use(bodyParser.json());

const routes = require('./routes');
app.use('/', routes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});