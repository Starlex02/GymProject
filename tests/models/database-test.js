import { expect } from "chai";
import { Database } from "../../models/database.js";
import { config } from "../../config/config.js";

const testConfig = {
    host: config.host,
    user: config.user,
    password: config.password,
    database: "test_db",
}

describe("Database", () => {
    let db;

    before(async () => {
        db = new Database();
    });

    after(async () => {
        try {
            await db.sequelize.query(`DROP DATABASE IF EXISTS \`${testConfig.database}\`;`);
        } catch (error) {
            console.error('Error dropping test database:', error.message);
        } finally {
            await db.close();
        }
    });

    it("should establish a connection and execute a query", async () => {
        await db.init(testConfig);

        expect(db.sequelize).to.not.be.undefined;
    });

    it("should create the database", async function() {
        await db.createDB(testConfig.database);

        const [databases] = await db.sequelize.query("SHOW DATABASES LIKE ?;", {
            replacements: [testConfig.database],
        });
        expect(databases.length).to.be.above(0);
    });

    it("should use the database", async function() {
        await db.useDB(testConfig.database);

        const [result] = await db.sequelize.query("SELECT DATABASE();");
        expect(result[0]['DATABASE()']).to.equal(testConfig.database);
    });
});