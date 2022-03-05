const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const swUi = require("swagger-ui-express");
const swSpec = require("./sw-config.js");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));
app.use("/api/v1", require("./server/v1/router.js"));
app.use("/users", require("./server/v1/userRouter.js"));

app.get("/schema/create", function(req, res) {
    res.render("schemaform");
});

app.use(
    "/api-docs",
    swUi.serve,
    swUi.setup(swSpec)
);

// app.get("/", (req, res) => {
//     res.send("<h1>Server 3Р1.19</h1>");
// });

app.listen(PORT, (err) => {
    if (!err) {
        console.log("Server is starting on port: " + PORT);
    }
});
