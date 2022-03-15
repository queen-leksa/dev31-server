const createSchema = (name, body, u, p, link, db) => {
    return `const db = require("mongoose");
const path = "mongodb+srv://${u}:${p}@${link}/${db}?retryWrites=true&w=majority";

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