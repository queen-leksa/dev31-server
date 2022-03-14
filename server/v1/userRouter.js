// const router = require("express").Router();
// const parser = require("body-parser").json();
// const {getUsers, addUser} = require("./controllers/userCtr.js");

/**
* @swagger
* tags:
*   - name: Users
*     description: user API
* /users:
*   get:
*     description: Получить всех пользователей
*     tags: [Users]
*     responses:
*       200:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 data:
*                   type: object
*                   properties:
*                     name:
*                       type: string
*                     profession:
*                       type: string
*   post:
*     description: Добавить пользователя
*     tags: [Users]
*     produces:
*       - application/json
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*               profession:
*                 type: string
*     responses:
*       201:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 data:
*                   type: object
*                   properties:
*                     msg:
*                       type: string
* */

// router.get("/", getUsers);
// router.post("/", parser, addUser);
//
// module.exports = router;