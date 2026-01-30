/**
 * User routes module for handling user-related API endpoints.
 * This module defines RESTful routes for CRUD operations on users,
 * delegating to the appropriate controller functions.
 */

import express from "express";
import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get("/users", getAllUsers);

// @route   GET /api/users/:id
// @desc    Get a single user by ID
// @access  Public
// Note: :id is a route parameter expected to be a valid user ID (e.g., integer)
router.get("/users/:id", getUserById);

// @route   POST /api/users
// @desc    Create a new user
// @access  Public
// Note: Uses validateUser middleware to check request body before calling createUser
router.post("/user", validateUser, createUser);

// @route   PUT /api/users/:id
// @desc    Update an existing user
// @access  Public
// Note: :id is a route parameter; validateUser middleware ensures valid input
router.put("/user/:id", validateUser, updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete a user by ID
// @access  Public
// Note: :id is a route parameter for the user to delete
router.delete("/user/:id", deleteUser);

export default router;
