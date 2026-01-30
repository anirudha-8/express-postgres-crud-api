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

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get("/users", getAllUsers);

// @route   GET /api/users/:id
// @desc    Get a single user by ID
// @access  Public
router.get("/users/:id", getUserById);

// @route   POST /api/users
// @desc    Create a new user
// @access  Public
router.post("/users", createUser);

// @route   PUT /api/users/:id
// @desc    Update an existing user
// @access  Public
router.put("/users/:id", updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete a user by ID
// @access  Public
router.delete("/users/:id", deleteUser);

export default router;
