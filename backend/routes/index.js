import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hii there i am yash chandra");
});

app.listen(process.env.PORT, () => {
  console.log("the server is running on the port:", process.env.PORT);
});
