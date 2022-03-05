const createSchema = (name, body, u = process.env.DBUSER, p = process.env.DBPWD, db = "test") => {
    return `const db = require("mongoose");
const path = "mongodb+srv://${u}:${p}@dev.k2ezu.mongodb.net/${db}?retryWrites=true&w=majority";

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err) {
    if (err) {
        console.log("Cannot connect to DB");
    }
});

const Schema = new db.Schema(${body});
const ${name} = db.model("${name}", Schema);
module.exports = ${name};`;
}

module.exports = createSchema;