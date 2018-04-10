var path = require("path");

module.exports = function(app) {
   app.get("/", function(req,res) {
       res.render("index");
   })

   app.get("/results", function(req,res) { 
       res.render(path.join("results"));
   })

   app.get("/form", function(req,res) {
       res.render(path.join("form"));
   })
}
