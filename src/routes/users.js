const { Router } = require("express");
const userValidator = require("../middlewares/userValidator");
const { generateID, exists } = require("../utils");


const usersRepository = [
    {
        id: "1",
        name: "Leanne Graham",
        email: "Sincere@april.biz",
    },
    {
        id: "2",
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
    },
    {
        id: "3",
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
    },
];

const router = Router(); /* /api/users */

router.get("/", async (req, res) => {
    return res.status(200).json(usersRepository);
});

router.get("/id/:id", async (req, res) => {
    const requestedUser = usersRepository.find(user => req.params.id === user.id);

    if(exists(requestedUser)) return res.status(200).json(requestedUser);

    return res.sendStatus(404);
});

router.post("/", userValidator, (req, res) => {
    const user = req.user;
    const id = generateID();

    const createdUser = { ...user, id };

    usersRepository.push(createdUser);

    return res.status(201).json(createdUser);
});

// Task - implement functionalities below
router.delete("/:id", (req, res) => {
    // DELETE - delete, duh xd
});

router.put("/:id", (req, res) => {
    // PUT - update
});


module.exports = router;