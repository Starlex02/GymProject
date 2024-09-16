import { Model } from 'sequelize';

export default class User extends Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            goal: {
                type: DataTypes.STRING
            },
            age: {
                type: DataTypes.STRING
            },
            height: {
                type: DataTypes.STRING
            },
            weight: {
                type: DataTypes.STRING
            }
        }, {
            sequelize,
            tableName: 'users'
        });
    }
}
