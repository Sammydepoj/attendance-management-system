// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "config.env" });
// eslint-disable-next-line no-undef
let PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
