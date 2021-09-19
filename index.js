const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

// view engine setup
app.set('views', path.resolve(__dirname, 'assets', 'pages'));
app.set('view engine', 'ejs');

// public directory setup
app.use(express.static(path.resolve(__dirname, 'public')));

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
