const fs = require("fs");
const newSchema = require("../../mainModel/schema.js");
const Collections = require("../../mainModel/collections.js");
const dbname = process.env.DBNAME;
const dbpwd = process.env.DBPWD;
const dblink = process.env.DB;

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
    const file = newSchema(schemaName, JSON.stringify(req.body), dbname, dbpwd, dblink, req.params.db);
    fs.writeFile(`./server/models/${schemaName}.js`, file, function (err) {
        if (!err) {
            res.json({msg: "All correct"});
        }
    });
}

const getCollections = async (req, res) => {
    const data = await Collections.find({}).select("-_id -__v");
    // console.log(data);
    fs.readdir("./server/models", function(err, files) {
        console.log(files);
        files = files.map(file => file.split(".")[0]);
        console.log(files);
        /* Если в массиве  data file !includes data.name => create file */
        data.forEach(el => {
            if (!files.includes(el.name)) {
                console.log(`no file ${el.name}`);
                let body = {};
                el.fields.forEach(item => {
                    body[item.name] = item.type;
                });
                console.log(body);
                const file = newSchema(el.name, JSON.stringify(body), dbname, dbpwd, dblink, req.params.db);
                fs.writeFile(`./server/models/${el.name}.js`, file, function (err) {
                    if (!err) {
                        console.log(`add schema ${el.name}`);
                    }
                });
            }
        })
    });

    res.json({msg: "ok", data: data});
}

module.exports = {createSchema, getName, getCollections};