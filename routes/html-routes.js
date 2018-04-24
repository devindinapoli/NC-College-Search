var path = require("path");

module.exports = function(app) {
    app.get("/", function(req,res) {
       res.render("index");
    })

    app.get("/search", function(req,res) { 
        res.render(path.join("form"));
    })

    app.get("/signup", function(req,res) { 
        res.render(path.join("signup"));
    })

    app.get("/profile", function(req,res) {
        res.render(path.join("profile"));
    })
}
