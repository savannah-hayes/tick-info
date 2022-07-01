import express from "express";

import { displayCities } from "../controllers/cityController.js";

const router = express.Router();

router.get("/cities", displayCities);

export default router;