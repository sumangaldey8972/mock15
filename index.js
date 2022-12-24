const express = require("express");
const connect = require("./db/db");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to mock 15");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`server started ${PORT}`);
});
