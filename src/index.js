import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api", userRoutes);

// postgres testing route
app.get("/", async (req, res) => {
	const result = await pool.query("SELECT current_database()");
	console.log(result);
	const dbName = result.rows[0].current_database;
	res.send(`The database name is: ${dbName}`);
});

// ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

// Create Table Before Starting the Server
createUserTable();

// RUNNING SERVER
app.listen(PORT, () => {
	console.log(`Server is running on - http://localhost:${PORT}`);
});
