/**
 * User controller module for handling HTTP requests related to users.
 * This module provides route handlers that interact with the user model services
 * to perform CRUD operations. It includes error handling and proper HTTP response formatting.
 */

import {
	createUserService,
	deleteUserService,
	getAllUsersService,
	getUserByIdService,
	updateUserService,
} from "../models/userModel";

/**
 * Standardized response helper function.
 * Sends a JSON response with status, message, and optional data.
 * @param {Object} res - Express response object.
 * @param {number} status - HTTP status code.
 * @param {string} message - Response message.
 * @param {any} data - Optional data to include in the response.
 */
const handleResponse = (res, status, message, data = null) => {
	res.status(status).json({
		status,
		message,
		data,
	});
};

/**
 * Retrieves all users.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const getAllUsers = async (req, res, next) => {
	try {
		const users = await getAllUsersService();
		handleResponse(res, 200, "All users fetched successfully!", users);
	} catch (error) {
		next(error);
	}
};

/**
 * Retrieves a single user by ID.
 * @param {Object} req - Express request object, expects id in params.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const getUserById = async (req, res, next) => {
	try {
		const user = await getUserByIdService(req.params.id);
		if (!user) return handleResponse(res, 404, "User not found!");
		handleResponse(res, 200, "User fetched successfully!", user);
	} catch (error) {
		next(error);
	}
};

/**
 * Creates a new user.
 * @param {Object} req - Express request object, expects name and email in body.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const createUser = async (req, res, next) => {
	const { name, email } = req.body;
	try {
		const newUser = await createUserService(name, email);
		handleResponse(res, 201, "User created successfully!", newUser);
	} catch (error) {
		next(error);
	}
};

/**
 * Updates an existing user.
 * @param {Object} req - Express request object, expects id in params and name/email in body.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const updateUser = async (req, res, next) => {
	const { name, email } = req.body;
	try {
		const updatedUser = await updateUserService(req.params.id, name, email);
		if (!updatedUser) return handleResponse(res, 404, "User not found!");
		handleResponse(res, 200, "User updated successfully!", updatedUser);
	} catch (error) {
		next(error);
	}
};

/**
 * Deletes a user by ID.
 * @param {Object} req - Express request object, expects id in params.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const deleteUser = async (req, res, next) => {
	try {
		const deletedUser = await deleteUserService(req.params.id);
		if (!deletedUser) return handleResponse(res, 404, "User not found!");
		handleResponse(res, 200, "User deleted successfully!", deletedUser);
	} catch (error) {
		next(error);
	}
};
