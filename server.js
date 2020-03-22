const express = require("express");
const mongoose = require('mongoose');
const logger = require("morgan");


const PORT = process.env.PORT || 3005;



const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// const databaseUrl = "workout";
// const collections = ["notes"];

// const db = mongojs(databaseUrl, collections);

//routes
app.use(require("./routes/apiRoutes.js"))
app.use(require("./routes/htmlRoutes.js"))


// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});


