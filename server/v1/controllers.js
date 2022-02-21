const addRecord = async (req, res) => {
    console.log(req.query);
    const Schema = require(`../models/${req.params.name}.js`);
    await new Schema({...req.query}).save();
    res.json({msg: "All correct"});
}

module.exports = {addRecord};