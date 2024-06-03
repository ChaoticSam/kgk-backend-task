const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://avnadmin:AVNS_t8e7rEUjFXkXM_jBudr@kgk-backend-kgkdatabase.f.aivencloud.com:18395/defaultdb?sslmode=require')
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

module.exports = User;
