require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const foldersRouter=require('./folders/folders-router');
const validateBearerToken=require('./validate-bearer-token'); 
const NotesRouter = require('./notes/notes-router');
const app = express();

const morganOption = NODE_ENV === 'production';

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'development'
}));
app.use(helmet());
app.use(cors());
//app.use(validateBearerToken);
app.use('/api/folders',foldersRouter);
app.use('/api/notes',NotesRouter);


app.get('/', (req, res) => {
  
  res.send('Hello World');
});


app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
