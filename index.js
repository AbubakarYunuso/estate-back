require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes/buldingObject.route.js'))
app.use('/images',express.static('images'))

app.use(require("./routes/user.route"));
app.use(require('./routes/estate.route'))
app.use(require('./routes/submitMail.route.js'))
app.use(require('./routes/comments.route.js'))

mongoose
  .connect(process.env.MONGO_SERVER)
  
  .then(() => console.log("mongoose connect"))
  .catch(() => console.log("mongoose warning"));

app.listen(process.env.PORT, () => {
  console.log("Server start on port: " + process.env.PORT);
});