const express = require("express");
const app = express();

// require("./middleware/db")();
require("./middleware/routesMiddleware")(app);
require("./middleware/db")();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

// module.exports.app = app;
