const fs = require("fs");
const newSchema = require("./schema.js");
const getName = function(data) {
    if (data[data.length - 1] !== "s") {
        data += "s";
    }
    return data;
}


const addRecord = async (req, res) => {
    console.log(req.query);
    const Schema = require(`../models/${req.params.name}.js`);
    await new Schema({...req.query}).save();
    res.json({msg: "All correct"});
}

const createSchema = (req, res) => {
    console.log(req.params.name);
    let schemaName = getName(req.params.name);
    console.log(schemaName);
    console.log(req.body);
    const file = newSchema(req.params.db, schemaName, JSON.stringify(req.body), "vasya-dev", "Qwerty123");


    fs.writeFile(`./server/models/${schemaName}.js`, file, function (err) {
        if (!err) {
            res.json({msg: "All correct"});
        }
    });
}

module.exports = {addRecord, createSchema};