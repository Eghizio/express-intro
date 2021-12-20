const { Router } = require("express");
const usersRouter = require("./users");


const router = Router(); /* /api */

router.get("/hello", async (req, res) => {
    return res.json({
        "hello": "there",
        "url": "http://localhost:1337/meme.png",
    });
});

router.use("/users", usersRouter);


module.exports = router;