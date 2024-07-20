const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  const data = {
    title: "Ejs Demo",
    message: "Hello students! welcome to ejs",
    items: ["Item1", "Item2", "Item3"],
  };
  res.render("index", data);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
