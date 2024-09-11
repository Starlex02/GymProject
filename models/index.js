import { config } from "../config/config.js";
import { DataTypes } from "sequelize";
import Database from "./database.js";
import User from "./user.js";
import Exercise from "./exercise.js";
import Measurement from "./measurement.js";
import WorkoutProgram from "./workout-programs.js";
import ProgramGroup from "./program-group.js";
import ProgramExercise from "./program-exercise.js";
import WorkoutLog from "./workout-log.js";

const db = new Database();

await db.init(config.db);
await db.createDB(config.db.database);
await db.useDB(config.db.database);

const sequelize = db.sequelize;

User.init(sequelize, DataTypes);
Exercise.init(sequelize, DataTypes);
Measurement.init(sequelize, DataTypes);
WorkoutProgram.init(sequelize, DataTypes);
ProgramGroup.init(sequelize, DataTypes);
ProgramExercise.init(sequelize, DataTypes);
WorkoutLog.init(sequelize, DataTypes);

await sequelize.sync();

export {sequelize, User, Exercise, Measurement, WorkoutProgram, ProgramGroup, ProgramExercise, WorkoutLog};