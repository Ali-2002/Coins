const express = require("express");
const coinsRouter = require("./routes/coinsRoute");
const cors = require('cors')
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use("/", coinsRouter);

app.listen(PORT, () =>
  console.log(`Server listening on port: http://localhost:${PORT}`)
);
