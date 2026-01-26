import express from "express";
import {
	createUser,
	deleteUser,
	getAllUser,
	getUserById,
	updateUser,
} from "../controllers/userController";

const router = express.Router();

router.get("/users", getAllUser);
router.get("/user/:id", getUserById);
router.post("/create", createUser);
router.put("/update", updateUser);
router.delete("/delete", deleteUser);

export default router;
