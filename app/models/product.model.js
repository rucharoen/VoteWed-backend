module.exports = (sequelize, dataType) => {
    const Product = sequelize.define("HRCloud", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        memberNumber: {
            type: dataType.STRING,
            allowNull: false
        },

        fullName: {
            type: dataType.STRING,
            allowNull: false
        },

        phone: {
            type: dataType.STRING,
            allowNull: false
        },

        voteDate: {
            type: dataType.STRING,
            allowNull: false
        },

    });

    return Product;
};