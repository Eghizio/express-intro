const { Router } = require("express");
const usersRouter = require("./users");


const router = Router(); /* /api */

router.get("/hello", async (req, res) => {
    console.log("Hello there");
    res.json({ "hello": "world" });
});

router.use("/users", usersRouter);


module.exports = router;