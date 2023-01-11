const express = require("express");
const bodyParser = require("body-parser");
const Authenticate = require("./MiddleWare/Authenticate");
const Authorise = require("./MiddleWare/Authorise");
var base64 = require("base-64");
const login = require("./MiddleWare/Routes/API/login");
const { Connect } = require("./Database/Connect");
const {
  user,
  SyncUser,
  getAllUsers,
  createUser,
} = require("./Database/user_schema");

const app = express();
const port = 3000;
Connect();
// SyncUser();
// createUser("zia", "zia");
// getAllUsers();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post("/auhtorise", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
app.post("/authenticate", Authenticate, (req, res) => {
  res.json({ message: "success" });
});

app.post("/login", login);

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
