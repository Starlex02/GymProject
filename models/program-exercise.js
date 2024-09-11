import { Model } from "sequelize";

export default class ProgramExercise extends Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            program_group_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'program_groups',
                    key: 'id',
                }
            },
            exercise_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'exercises',
                    key: 'id',
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
            time: {
                type: DataTypes.TIME,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'program_exercises'
        })
    };
}