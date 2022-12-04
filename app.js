require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send('this is the userslist');
};

app.get('/', welcome);

const userlist = require('./userlist');

app.get('/api/users', userlist.getUser);
app.get('/api/users/:id', userlist.getUserById);
app.post('/api/users', userlist.postUser);
app.put('/api/users/:id', userlist.updateUser);
app.delete('/api/users/:id', userlist.deleteUser);

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
