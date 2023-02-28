var mongoose = require("mongoose");

// mongoose.Promise = global.Promise;

main().catch((err) => console.log(err));

//change the database with yours
mongoose.connect("mongodb://127.0.0.1:27017/medicDB");

module.exports = { mongoose };
