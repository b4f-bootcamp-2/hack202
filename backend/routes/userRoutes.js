import express from "express";
import { registerQuote, registerVisit } from "../controllers/userControllers.js";

const router = express.Router()

// Create a Route, API endpoint 
router.post('/', registerQuote)
router.post('/bookingVisit', registerVisit)

export { router };