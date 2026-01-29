import {
	createUserService,
	deleteUserService,
	getAllUsersService,
	getUserByIdService,
	updateUserService,
} from "../models/userModel";

const handleResponse = (res, status, message, data = null) => {
	res.status(status).json({
		status,
		message,
		data,
	});
};

export const getAllUsers = async (req, res, next) => {
	try {
		const users = await getAllUsersService();
		handleResponse(res, 200, "All users fetched successfully!", users);
	} catch (error) {
		next(error);
	}
};

export const getUserById = async (req, res, next) => {
	try {
		const user = await getUserByIdService(req.params.id);
		if (!user) return handleResponse(res, 404, "User not found!");
		handleResponse(res, 200, "User fetched successfully!", user);
	} catch (error) {
		next(error);
	}
};

export const createUser = async (req, res, next) => {
	const { name, email } = req.body;
	try {
		const newUser = await createUserService(name, email);
		handleResponse(res, 201, "User created successfully!", newUser);
	} catch (error) {
		next(error);
	}
};

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

export const deleteUser = async (req, res, next) => {
	try {
		const deletedUser = await deleteUserService(req.params.id);
		if (!deletedUser) return handleResponse(res, 404, "User not found!");
		handleResponse(res, 200, "User deleted successfully!", deletedUser);
	} catch (error) {
		next(error);
	}
};
