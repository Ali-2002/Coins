const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const command = "SELECT * FROM coins";
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});

router.get("/:id", (req, res) => {
  const command = `select * from coins where id=${req.params.id}`;
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});

module.exports = router;
