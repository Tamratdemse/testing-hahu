import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Wordld!");
});

app.listen(3000);
