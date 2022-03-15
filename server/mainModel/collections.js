const db = require("mongoose");

const dbname = process.env.DBNAME;
const dbpwd = process.env.DBPWD;
const dblink = process.env.DB;
const dbname = "test";

const path = `mongodb+srv://${dbname}:${dbpwd}@${dblink}/${dbname}?retryWrites=true&w=majority`;
//mongodb+srv://vasya-dev:<password>@dev.k2ezu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err) {
    if (err) {
        console.log("Cannot connect to DB");
    }
});

const Schema = new db.Schema({
    name: String,
    fields: [Object]
});

const Collections = db.model("collections", Schema);

module.exports = Collections;