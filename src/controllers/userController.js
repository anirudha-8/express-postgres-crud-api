// @desc 	Get All User
// @route 	GET /api/users
// @access 	Public
export const getAllUser = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error.message}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error! Please, try again!",
		});
	}
};

// @desc 	Get User By Id
// @route 	GET /api/user/:id
// @access 	Public
export const getUserById = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error.message}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error! Please, try again!",
		});
	}
};

// @desc 	Create User
// @route 	POST /api/create
// @access 	Public
export const createUser = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error.message}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error! Please, try again!",
		});
	}
};
// @desc 	Update User
// @route 	PUT /api/user/:id
// @access 	Public
export const updateUser = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error.message}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error! Please, try again!",
		});
	}
};
// @desc 	Delete User
// @route 	DELETE /api/user/:id
// @access 	Public
export const deleteUser = async (req, res) => {
	try {
	} catch (error) {
		console.error(`Error: ${error.message}`);
		res.status(500).json({
			success: false,
			message: "Internal Server Error! Please, try again!",
		});
	}
};
