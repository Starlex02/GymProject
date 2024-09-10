export const config = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'admin',
        database: process.env.DB_NAME || 'gymproject',
        port: process.env.DB_PORT || '3306',
        dialect: process.env.DB_DIALECT || 'mysql'
    },
    app: {
        port: process.env.port || '3000',
        clientHost: process.env.CLIENT_HOST || 'http://localhost:3000',
    },
}

export const testConfig = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'admin',
        database: process.env.DB_NAME || 'test_db',
        port: process.env.DB_PORT || '3306',
        dialect: process.env.DB_DIALECT || 'mysql'
    },
    app: {
        port: process.env.port || '3000',
        clientHost: process.env.CLIENT_HOST || 'http://localhost:3000',
    },
}