import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectDB from './db/connectDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // Middleware to parse JSON data

app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});