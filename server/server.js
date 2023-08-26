require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const cookieparser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieparser());

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL, {});

app.get("/", (req, res) => {
    res.status(500).send();
});

app.listen(PORT, () => {
    console.log(`${PORT} is running...`);
});
