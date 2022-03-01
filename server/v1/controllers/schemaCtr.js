const fs = require("fs");
const newSchema = require("../schema.js");
const Collections = require("../../models/collections.js");

const getName = function(data) {
    if (data[data.length - 1] !== "s") {
        data += "s";
    }
    return data;
}
const createSchema = async (req, res) => {
    let schemaName = getName(req.params.name);
    const body = []
    for (let k in req.body) {
        body.push(k);
    }
    let col = await Collections.findOne({name: schemaName});
    if (col) {
        await Collections.updateOne({name: schemaName}, {$set: {fields: body}});
    } else {
        await new Collections({name: schemaName, fields: body}).save();
    }
    const file = newSchema(req.params.db, schemaName, JSON.stringify(req.body), "vasya-dev", "Qwerty123");
    fs.writeFile(`./server/models/${schemaName}.js`, file, function (err) {
        if (!err) {
            res.json({msg: "All correct"});
        }
    });
}

const getCollections = async (req, res) => {
    const data = await Collections.find({}).select("-_id -__v");
    console.log(data);
    res.json({msg: "ok", data: data});
}

module.exports = {createSchema, getName, getCollections};