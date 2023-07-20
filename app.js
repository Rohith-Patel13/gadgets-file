const express = require("express");
const app = express();
<<<<<<< HEAD

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (requestObj, responseObj) => {
  response.send("About Page");
});

=======
app.get("/gadgets", (requestObject, responseObject) => {
  responseObject.sendFile("./gadgets.html", { root: __dirname });
});
>>>>>>> 8f07997bee0f0e0945b82f91fd60083aa860ec4e
module.exports = app;
