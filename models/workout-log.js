import { Model } from "sequelize";

export default class WorkoutLog extends Model {
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
            exercise_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'exercises',
                    key: 'id'
                }
            },
            sets: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            reps: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            weight: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            time: {
                type: DataTypes.TIME,
                allowNull: false
            },  
            distance: {
                type: DataTypes.FLOAT,
                allowNull: false
            },  
            notes: {
                type: DataTypes.STRING
            },
            distance: {
                type: DataTypes.FLOAT
            },
            difficulty: {
                type: DataTypes.STRING
            },
            image: {
                type: DataTypes.STRING
            }
        },{
            sequelize,
            tableName: 'workout_logs'
        });
    }
}