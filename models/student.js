module.exports = function(sequelize,DataTypes) {
    var Student = sequelize.define("Student", {
      
        degree_type: {
            type: DataTypes.STRING
        },
        program: {
            type: DataTypes.STRING
        },
        max_tuition: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });
    return Student
}
    
