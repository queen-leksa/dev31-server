const {getName} = require("./schemaCtr.js");
const showRecords = async (req, res) => {
    let table = getName(req.params.table);
    try {
        const Schema = require(`../../models/${table}.js`);
        const records = await Schema.find({});
        res.json({msg: "ok", data: records});
    } catch (err) {
        res.json({msg: err});
    }
}
const getRecord = async (req, res) => {
    let table = getName(req.params.table);
    try {
        const Schema = require(`../../models/${table}.js`);
        const record = await Schema.findById(req.params.id);
        res.json({msg: "ok", data: record});
    } catch (err) {
        res.json({msg: err});
    }
}
const getRecordsId = async (req, res) => {
    let table = getName(req.params.table);
    try {
        const Schema = require(`../../models/${table}.js`);
        const records = await Schema.find({}).select("_id");
        res.json({msg: "ok", data: records});
    } catch (err) {
        res.json({msg: err});
    }
}
const addRecord = async (req, res) => {
    let table = getName(req.params.table);
    try {
        const Schema = require(`../../models/${table}.js`);
        try {
            await new Schema(req.body).save();
            res.json({msg: "ok", data: "Record add to db"});
        } catch (err) {
            res.json({msg: err});
        }
    } catch (err) {
        res.json({msg: err});
    }
}
const updateRecord = async (req, res) => {
    let table = getName(req.params.table);
    try {
        const Schema = require(`../../models/${table}.js`);
        try {
            await Schema.updateOne({_id: req.params.id}, {$set: req.body});
            res.json({msg: "ok", data: "Record update"});
        } catch(err) {
            res.json({msg: err});
        }
    } catch (err) {
        res.json({msg: err});
    }
}
const delRecord = async (req, res) => {
    let table = getName(req.params.table);
    try {
        const Schema = require(`../../models/${table}.js`);
        await Schema.deleteOne({_id: req.params.id});
        res.json({msg: "ok", data: "Record delete from db"});
    } catch (err) {
        res.json({msg: err});
    }
}

module.exports = {
    showRecords,
    getRecord,
    getRecordsId,
    addRecord,
    updateRecord,
    delRecord
};