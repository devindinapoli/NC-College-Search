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

    app.get("/api/city/:city", function(req,res) {
        db.School.findAll({
            where: {
                city: req.params.city
            }
        }).then(function(result) {
            res.json(result)
        })
    })

    app.get("/api/zip/:zip", function(req,res) {
        db.School.findAll({
            where: {
                zip: req.params.zip
            }
        }).then(function(result){
            res.json(result);
        })
    })
    
    app.get("/api/name/:inst_name", function(req,res){
        db.School.findOne({
            where: {
                inst_name: req.params.inst_name
            }
        }).then(function(result){
            res.json(result);
        })
    })
}



