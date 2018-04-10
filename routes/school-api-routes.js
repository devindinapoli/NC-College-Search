var db = require("../models");

module.exports = function(app) {
    app.get("/api/schools", function(req, res){
        db.School.findAll({}).then(function(result){
            res.json(result)
        });
    });

    app.get("/api/schools/:id", function(req,res){
        db.School.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(result){
            res.json(result)
        })
    })
}