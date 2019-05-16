var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost/todoDB', {
    useNewUrlParser: true
});
/*
mongoose.connect("mongodb+srv://jorgerojas26:jorgerojas26@cluster0-q4dxm.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
});
*/

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', function callback() {
    console.log(">>> DB is connected");
}); 