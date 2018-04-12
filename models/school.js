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
        school_url: {
            type: DataTypes.STRING
        },
        in_state: {
            type: DataTypes.INTEGER
        }
        // degree_type: {
        //     type: DataTypes.STRING
        // }
    }, {
        timestamps: false
    });
    return School
}
    







