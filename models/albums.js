var mongoose = require('mongoose');

var Schema = mongoose.Schema;





var AlbumsSchema = new Schema({
  title: String,
  artist: String,
  image: String,
  releaseDate: String
});

var Albums = mongoose.model('Album', AlbumSchema);
 
 module.exports = Album;
