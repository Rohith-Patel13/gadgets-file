const express = require("express");
const app = express();
app.get("/gadgets", (requestObject, responseObject) => {
  responseObject.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = app;
