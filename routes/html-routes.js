module.exports = function(app) {
    app.get("/", function(req,res) {
       res.render("index.handlebars");
    })

    // app.get("/results", function(req,res) { 
    //    res.render(path.join("results"));
    // })

    app.get("/search", function(req,res) { 
        res.render(path.join("form.handlebars"));
    })

    app.get("/signup", function(req,res) { 
        res.render(path.join("signup.handlebars"));
    })

//    app.get("/form", function(req,res) {
//        res.render(path.join("form"));
//    })

    app.get("/profile", function(req,res) {
        res.render(path.join("profile.handlebars"));
    })

}
