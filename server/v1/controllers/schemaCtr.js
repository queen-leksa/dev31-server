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
        body.push({name: k, type: req.body[k]});
    }
    console.log(body);
    let col = await Collections.findOne({name: schemaName});
    if (col) {
        await Collections.updateOne({name: schemaName}, {$set: {fields: body}});
    } else {
        await new Collections({name: schemaName, fields: body}).save();
    }
    const file = newSchema(schemaName, JSON.stringify(req.body), "vasya-dev", "Qwerty123", req.params.db);
    fs.writeFile(`./server/models/${schemaName}.js`, file, function (err) {
        if (!err) {
            res.json({msg: "All correct"});
        }
    });
}

const getCollections = async (req, res) => {
    const data = await Collections.find({}).select("-_id -__v");
    data.forEach(schema => {
        try {
            fs.readFile(`./server/models/${schema.name}.js`, "utf-8", function (err, text) {
            });
        } catch(e) {
            console.log("here");
            const file = newSchema(schema.name, JSON.stringify(schema.fields), "vasya-dev", "Qwerty123", req.params.db);
            fs.writeFile(`./server/models/${schema.name}.js`, file, function (err) {
                if (!err) {
                    console.log(`Create file ${schema.name}`);
                }
            });
        }
    })
    res.json({msg: "ok", data: data});
}

module.exports = {createSchema, getName, getCollections};