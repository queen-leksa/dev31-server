const jsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Simple steps for my API",
            version: "0.0.1",
            contact: {
                name: "from Leksa with love",
                email: "surnacheva@ithub.ru"
            }
        }
    },
    apis: ["./server/v1/userRouter.js"]
}
module.exports = jsDoc(options);
