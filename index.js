const express = require("express"),
  pug = require('pug');

const appResources = __dirname + "/static",
  app = express(),
  server = app.listen(8080);

app.use("/public/", express.static(appResources));
app.use("/", function(req, res) {
  const compiledFunction = pug.compileFile('slide.pug');
  
  res.send(compiledFunction({}));
});
