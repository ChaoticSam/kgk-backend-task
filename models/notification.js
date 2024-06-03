const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://avnadmin:AVNS_t8e7rEUjFXkXM_jBudr@kgk-backend-kgkdatabase.f.aivencloud.com:18395/defaultdb?sslmode=require')

const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        },
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

module.exports = Notification;
