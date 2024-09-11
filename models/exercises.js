import { Model } from "sequelize";

class Exercises extends Model {
    static init(sequelize, DataTypes) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            },
            muscle_group: {
                type: DataTypes.STRING,
                allowNull: false
            },
            equipment: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {          
                type: DataTypes.STRING
            },
            image: {
                type: DataTypes.STRING
            }
        }, {
            sequelize
        });
    }
}

export default Exercises;