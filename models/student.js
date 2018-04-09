module.exports = function(sequelize,DataTypes) {
    var Student = sequelize.define("Student", {
        student_name: {
            type: DataTypes.STRING
        },
        degree_type: {
            type: DataTypes.STRING
        },
        program: {
            type: DataTypes.STRING
        },
        home_state: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    });
    return Student
}
    