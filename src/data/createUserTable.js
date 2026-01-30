import pool from "../config/db.js";

/**
 * Creates the 'users' table in the database if it does not already exist.
 * This function is called before starting the server to ensure the table is available.
 */
const createUserTable = async () => {
	// SQL query to create the users table with necessary columns and constraints
	const queryText = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        );
    `;
	try {
		// Execute the query using the database pool
		await pool.query(queryText);
		console.log("User table created, if not exist!");
	} catch (error) {
		// Log any errors that occur during table creation
		console.error(`Error creating table: ${error}`);
	}
};

export default createUserTable;
