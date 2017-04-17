var express = require('express'),
    bodyParser = require ('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended:true}));

var controllers = require('./controllers');

// Routes
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', controllers.api.index);

app.get('/api/albums', controllers.albums.index);



app.listen(process.env.PORT|| 3000, function () {
  console.log('Listening at http://localhost:3000/');
});
