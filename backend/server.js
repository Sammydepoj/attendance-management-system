/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database/connect");

const app = express();

app.use(cors());
dotenv.config({ path: "config.env" });

// eslint-disable-next-line no-undef

connectDB();
let PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
