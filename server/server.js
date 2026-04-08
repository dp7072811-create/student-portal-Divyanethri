const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const FILE = "./data.json";

app.get("/api/data", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const newData = req.body;
  let data = JSON.parse(fs.readFileSync(FILE));
  data.push(newData);
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
  res.json({ message: "Saved" });
});

app.listen(5000, () => console.log("Server running on port 5000"));