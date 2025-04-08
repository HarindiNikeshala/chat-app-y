import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersFroSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/", protectRoute, getUsersFroSidebar);

export default router;