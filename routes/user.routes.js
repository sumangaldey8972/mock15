const { Router } = require("express");
const { UserModel } = require("../models/user.models");
const jwt = require("jsonwebtoken");

const app = Router();
app.get("/", (req, res) => {
  res.send("This is home");
});

app.post("/signup", async (req, res) => {
  try {
    let { email } = req.body;
    let user = await UserModel.findOne({ email });
    if (user) {
      res.status(401).send({ message: "email already exist" });
    } else {
      let newUser = await UserModel.create(req.body);
      res.send({ message: "signup successfull", data: newUser });
    }
  } catch (err) {
    res.status(500).send({ message: "signup successfull" });
  }
});

app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await UserModel.findOne({ email, password });
    if (user) {
      res.send({
        message: "login successful",
        token: token,
      });
    } else {
      res.send({ Error: "someting error" });
    }
  } catch (err) {
    res.status(500).send({ message: "signup successfull" });
  }
});

module.exports = app;
