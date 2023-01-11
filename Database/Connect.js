const { Sequelize } = require("sequelize");

// Database Connection
const sequelize = new Sequelize("ghl", "root", "zia", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

function Connect() {
  // Test the connection
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  return sequelize;
}
module.exports = { Connect, sequelize };
