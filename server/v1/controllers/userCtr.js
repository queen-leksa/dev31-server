const Users = require("../../models/users.js");

const getUsers = async (req, res) => {
    const data = await Users.find({});
    res.json({msg: "ok", data: data});
}

const addUser = async (req, res) => {
    await new Users(req.body).save();
    res.json({msg: "ok"});
}

module.exports = {getUsers, addUser};