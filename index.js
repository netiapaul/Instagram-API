const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routers/users.router');
const PORT = process.env.PORT || 3300;
const dotenv = require('dotenv');
dotenv.config({
    path: './config/.env'
});
const fs = require('fs')
const morgan = require('morgan')
const path = require('path');
const mongoose = require('mongoose');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
// log only 4xx and 5xx responses to console
app.use(morgan('dev'))
   
  // log all requests to access.log
// app.use(morgan('common', {
//   stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, () => {
  console.log('MONGO DB connection created');
});

// Middlewares routes
app.use('/api/v1/users',users);


// serving the app
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});
