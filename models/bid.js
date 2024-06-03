const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://avnadmin:AVNS_t8e7rEUjFXkXM_jBudr@kgk-backend-kgkdatabase.f.aivencloud.com:18395/defaultdb?sslmode=require')
const Bid = sequelize.define('Bid', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    item_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Items',
            key: 'id'
        },
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        },
        allowNull: false
    },
    bid_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

module.exports = Bid;
