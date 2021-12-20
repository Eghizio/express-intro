const express = require("express");
const { join } = require("path");
const api = require("./routes/api");
const loggerMiddleware = require("./middlewares/logger");


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(loggerMiddleware);

const publicDirectory = join("src", "public");

app.use("/", express.static(publicDirectory));
app.use("/api", api);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 1337;

app.listen(PORT, () => {
    console.log("\x1b[35m%s\x1b[0m", `[server] Server running on port ${PORT}`);
    console.log("\x1b[36m%s\x1b[0m", `[server] ${new Date()}`);
});
