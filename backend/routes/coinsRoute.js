const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const command = "SELECT * FROM coinsc";
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});

router.get("/category", (req, res) => {
  const command = `select distinct category from coinsc`;
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});

router.get("/mpimages", (req, res) => {
  const command = `select front_img from coinsc group by category`;
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});

router.get("/commemorative", (req, res) => {
  const command = `select * from coinsc where category= "Commemorative coins"`;
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});

router.get("/investment", (req, res) => {
  const command = `select * from coinsc where category= "Investment coins"`;
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});

router.get("/exclusive", (req, res) => {
  const command = `select * from coinsc where category= "Exclusive coins"`;
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});


router.get("/:id", (req, res) => {
  const command = `select * from coinsc where id=${req.params.id}`;
  db.query(command, (err, data) => {
    if (!err) {
      return res.json(data).status(200);
    }
    res.send("Error").status(401);
  });
});

module.exports = router;
