var path = require("path");

module.exports = function(app) {
    app.get("/", function(req,res) {
       res.render("index");
    })

    app.get("/results", function(req,res) { 
       res.render(path.join("results"));
    })

    app.get("/search", function(req,res) { 
        res.render(path.join("form"));
    })

    app.get("/signup", function(req,res) { 
        res.render(path.join("signup"));
    })

<<<<<<< HEAD
=======
   app.get("/form", function(req,res) {
       res.render(path.join("form"));
   })

   app.get("/profile", function(req,res) {
    res.render(path.join("profile"));
})
>>>>>>> 922aedb85eac18caed225e4dfd7145fc3a6eab55
}
