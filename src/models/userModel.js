/**
 * User model module for handling database operations related to users.
 * This module provides CRUD (Create, Read, Update, Delete) operations for the users table.
 * It uses a PostgreSQL connection pool for efficient database interactions.
 */

import pool from "../config/db.js";

/**
 * Retrieves all users from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of user objects.
 */
export const getAllUsersService = async () => {
	const result = await pool.query("SELECT * FROM users");
	return result.rows;
};

/**
 * Retrieves a single user by their ID.
 * @param {number} id - The unique identifier of the user.
 * @returns {Promise<Object|null} A promise that resolves to the user object or null if not found.
 */
export const getUserByIdService = async (id) => {
	const result = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
	return result.rows[0];
};

/**
 * Creates a new user in the database.
 * @param {string} name - The name of the user.
 * @param {string} email - The email address of the user.
 * @returns {Promise<Object>} A promise that resolves to the newly created user object.
 */
export const createUserService = async (name, email) => {
	const result = await pool.query(
		"INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
		[name, email],
	);
	return result.rows[0];
};

/**
 * Updates an existing user in the database.
 * @param {number} id - The unique identifier of the user to update.
 * @param {string} name - The new name of the user.
 * @param {string} email - The new email address of the user.
 * @returns {Promise<Object|null>} A promise that resolves to the updated user object or null if not found.
 */
export const updateUserService = async (id, name, email) => {
	const result = await pool.query(
		"UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *",
		[name, email, id],
	);
	return result.rows[0];
};

/**
 * Deletes a user from the database by their ID.
 * @param {number} id - The unique identifier of the user to delete.
 * @returns {Promise<Object|null} A promise that resolves to the deleted user object or null if not found.
 */
export const deleteUserService = async (id) => {
	const result = await pool.query("DELETE FROM user WHERE id=$1 RETURNING *", [
		id,
	]);
	return result.rows[0];
};
