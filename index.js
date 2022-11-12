const express = require("express");

const app = express();
const port = 3000;

app.get("/spotify", (req, res) => {
  console.log("in spotify", req.query);
  return res.json({ message: "Ok report" });
});

app.get("/calender", (req, res) => {
  console.log("in calender", req.query);

  return res.json({ message: "Ok report" });
});

app.get("/github", (req, res) => {
  console.log("in github", req.query);

  return res.json({ message: "Ok report" });
});
console.log(`App listening on port: ${port}`);
app.listen(port);
