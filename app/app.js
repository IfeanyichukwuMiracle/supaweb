require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
startServer(process.env.MONGO_LOCAL_URI);

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(`./public`));

app.get("/route", (req, res) => {
  res.send("Hello");
});

async function startServer(db_url) {
  try {
    await mongoose.connect(db_url);
    console.log(`DB connected...`);
    app.listen(port, () => console.log(`Server running on port ${port}...`));
  } catch (error) {
    console.log(`Error => ${error}`);
  }
}
