import { Sequelize } from 'sequelize';

class Database {
    constructor() {
        this.sequelize = null;
    }

    async init(config) {
        try {
            this.sequelize = new Sequelize('', config.user, config.password, {
                host: config.host,
                dialect: 'mysql',
                pool: {
                    max: 10,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
            });

            // Перевірка з'єднання
            await this.sequelize.authenticate();
            console.log('Connection pool created and tested successfully.');
        } catch (error) {
            console.error('Error creating or testing connection pool:', error.message);
            throw error;
        }
    }

    async createDB(database) {
        try {
            await this.sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
            console.log(`Database ${database} created or already exists.`);
        } catch (error) {
            console.error('Error creating database:', error.message);
            throw error;
        }
    }

    async useDB(database) {
        try {
            // Оновлення конфігурації підключення для вибору бази даних
            this.sequelize.config.database = database;
            await this.sequelize.query(`USE \`${database}\``);
            console.log(`Using database ${database}.`);
        } catch (error) {
            console.error('Error selecting database:', error.message);
            throw error;
        }
    }

    async close() {
        try {
            await this.sequelize.close();
            console.log('Connection pool closed.');
        } catch (error) {
            console.error('Error closing connection pool:', error.message);
        }
    }
}

export default Database;
