const app = require("./app");
const db = require('./config/db.js');
const UserModel = require('./model/user_model')

const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello changed World");
});

app.listen(port, () => {
  console.log(`server Listening on Port http://localhost:${port}`);
});
