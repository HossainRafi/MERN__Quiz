import express from "express";

const app = express();

//********* rout ***********
app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
