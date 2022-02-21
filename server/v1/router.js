const router = require("express").Router();

const {addRecord, createSchema} = require("./controllers.js");

router.get("/add/:name", addRecord);

router.post("/table/create/:db/:name", createSchema);

module.exports = router;