import express, { json } from "express";

const app = express();
app.use(json());
app.get("/ping", (req, res) => {
  try {
    res.send("hello word");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
app.listen(4000);
console.log("Express server listening on port 4000");
