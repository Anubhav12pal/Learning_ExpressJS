const express = require(express);
const router = express.Router();

router.rout("/api/contacts", (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});
