var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/tunley");

module.exports.Album = require("./album.js");
