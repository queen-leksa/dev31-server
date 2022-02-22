const router = require("express").Router();

const {createSchema} = require("./controllers/schemaCtr.js");
const {
    showRecords,
    getRecord,
    getRecordsId,
    addRecord,
    updateRecord,
    delRecord
} = require("./controllers/recordCtr.js");

router.get("/record/:db/:table/show/all", showRecords);
router.get("/record/:db/:table/show/one/:id", getRecord);
router.get("/record/:db/:table/ids", getRecordsId);
router.post("/record/:db/:table/add", addRecord);
router.put("/record/:db/:table/upd/:id", updateRecord);
router.delete("/record/:db/:table/del/:id", delRecord);

router.post("/table/create/:db/:name", createSchema);

module.exports = router;