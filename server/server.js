const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (mainly Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user1:password1@ds237267.mlab.com:37267/heroku_6883437c"
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server listening on port ${PORT}`);
});
