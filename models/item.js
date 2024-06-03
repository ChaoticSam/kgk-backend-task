const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://avnadmin:AVNS_t8e7rEUjFXkXM_jBudr@kgk-backend-kgkdatabase.f.aivencloud.com:18395/defaultdb?sslmode=require')
const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    starting_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    current_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: DataTypes.DECIMAL
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamp: false
});

module.exports = Item;