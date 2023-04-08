const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const PORT = process.env.PORT || 7101;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
