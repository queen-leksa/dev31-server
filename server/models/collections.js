const db = require("mongoose");

const dbUser = process.env.DBUSER || "vasya-dev";
const dbPwd = process.env.DBPWD || "Qwerty123";
const dbName = "test";

const path = `mongodb+srv://${dbUser}:${dbPwd}@dev.k2ezu.mongodb.net/${dbName}?retryWrites=true&w=majority`;

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
    fields: [String]
});

const Collections = db.model("collections", Schema);

module.exports = Collections;