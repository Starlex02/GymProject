import { expect } from "chai";
import Database from "../../models/database.js";
import { testConfig } from "../../config/config.js";

const testConfigDb = testConfig.db;

describe("Database", () => {
    let db;

    before(async () => {
        db = new Database();
    });

    after(async () => {
        try {
            await db.sequelize.query(`DROP DATABASE IF EXISTS \`${testConfigDb.database}\`;`);
        } catch (error) {
            console.error('Error dropping test database:', error.message);
        } finally {
            await db.close();
        }
    });

    it("should establish a connection and execute a query", async () => {
        await db.init(testConfigDb);

        expect(db.sequelize).to.not.be.undefined;
    });

    it("should create the database", async function() {
        await db.createDB(testConfigDb.database);

        const [databases] = await db.sequelize.query("SHOW DATABASES LIKE ?;", {
            replacements: [testConfigDb.database],
        });
        expect(databases.length).to.be.above(0);
    });

    it("should use the database", async function() {
        await db.useDB(testConfigDb.database);

        const [result] = await db.sequelize.query("SELECT DATABASE();");
        expect(result[0]['DATABASE()']).to.equal(testConfigDb.database);
    });
});