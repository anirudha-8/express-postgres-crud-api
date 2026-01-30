import Joi from "joi";

// Define the validation schema for user data
// - name: Must be a string with at least 3 characters, required
// - email: Must be a valid email format, required
const userSchema = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
});

// Middleware function to validate user input in request body
const validateUser = (req, res, next) => {
	// Validate req.body against the schema
	const { error } = userSchema.validate(req.body);
	if (error)
		// Return a 400 Bad Request with the first validation error message
		return res.status(400).json({
			status: 400,
			message: error.details[0].message,
		});
	// If validation passes, proceed to the next middleware/controller
	next();
};

export default validateUser;
