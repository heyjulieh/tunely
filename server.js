var express = require('express'),
    bodyParser = require ('body-parser');

    var app = express();

    var controllers = require('./controllers');

    app.use(express.static('public'));

    app.use(bodyParser.urlencoded({ extended:true}));
    
    app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


 app.get('/api/album', function (req, res) {
  db.Albums.find(function (err, album) {
      if (err) {
      console. log(error +err.message);
      res. status(500).send();
  } else {
  	res.json(album);
     }
   });
});


app.get('/api', controllers.api.index);























    app.listen(process.env.PORT|| 3000, function () {
    	console.log('listening at http://localhost:3000/');
    });
    