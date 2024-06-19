const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routs/contactRouts"));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
