const fs = require("fs");
const newSchema = require("../schema.js");
const getName = function(data) {
    if (data[data.length - 1] !== "s") {
        data += "s";
    }
    return data;
}
const createSchema = (req, res) => {
    let schemaName = getName(req.params.name);
    const file = newSchema(req.params.db, schemaName, JSON.stringify(req.body), "vasya-dev", "Qwerty123");
    fs.writeFile(`./server/models/${schemaName}.js`, file, function (err) {
        if (!err) {
            res.json({msg: "All correct"});
        }
    });
}

module.exports = {createSchema, getName};