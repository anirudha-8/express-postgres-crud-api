import express from "express";
import {
	createUser,
	deleteUser,
	getAllUser,
	getUserById,
	updateUser,
} from "../controllers/userController";

const router = express.Router();

// @desc - get all users
router.get("/users", getAllUser);

// @desc - get single by id
router.get("/user/:id", getUserById);

// @desc - create user
router.post("/create", createUser);

// @desc - update user
router.put("/update", updateUser);

// @desc - delete user
router.delete("/delete", deleteUser);

export default router;
