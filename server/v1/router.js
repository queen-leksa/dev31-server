const router = require("express").Router();
const {addRecord} = require("./controllers.js");

router.get("/add/:name", addRecord);

module.exports = router;