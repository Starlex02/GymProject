import { Model } from "sequelize";

export default class Measurement extends Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            weight: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            shoulders: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            chest: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            biceps: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            forearms: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            wrist: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            waist: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            hips: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            thighs: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            shin: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'measurements'
        });
    }
}