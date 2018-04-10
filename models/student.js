module.exports = function(sequelize,DataTypes) {
    var Student = sequelize.define("Student", {
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        degree_type: {
            type: DataTypes.STRING
        },
        home_state: {
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
    
