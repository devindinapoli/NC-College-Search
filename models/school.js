module.exports = function(sequelize,DataTypes) {
    var School = sequelize.define("School", {
        inst_name: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.INTEGER
        },
        url: {
            type: DataTypes.STRING
        },
        in_state: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });
    return School
}
    







