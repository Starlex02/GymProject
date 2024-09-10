import { Model } from 'sequelize';

class User extends Model {
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
                type: DataTypes.STRING,
                allowNull: false
            },
            age: {
                type: DataTypes.STRING,
                allowNull: false
            },
            height: {
                type: DataTypes.STRING,
                allowNull: false
            },
            weight: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize
        });
    }
}

export default User;
