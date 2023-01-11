const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("./Connect");

const user = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
function SyncUser() {
  user.sync({ alter: true }).then(() => {
    console.log("User table created");
  });
}
function getAllUsers() {
  user
    .findAll()
    .then((users) => {
      console.log("All users:", JSON.stringify(users, null, 4));
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

function createUser(email, password) {
  user
    .create({
      email: email,
      password: password,
    })
    .then((user) => {
      console.log("User created: ", user);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { user, SyncUser, getAllUsers, createUser };
