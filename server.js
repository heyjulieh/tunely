var express = require('express'),
    bodyParser = require ('body-parser');

    var app = express();

    app.use(express.static('public'));

    app.use(bodyParser.urlencoded({ extended:true}));
    
    app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});






























    app.listen(process.env.PORT|| 3000, function () {
    	console.log('listening at http://localhost:3000/');
    });
    