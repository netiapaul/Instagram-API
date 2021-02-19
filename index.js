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
const path = require('path')

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
// log only 4xx and 5xx responses to console
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))
   
  // log all requests to access.log
  app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
  }))

// Middlewares routes
app.use('/api/v1/users',users);


// serving the app
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});

//TODO create a new DB in mongo atlas 