import express from "express";
import { loginController, registerController} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// register

router.post('/register', registerController);

// login 

router.post('/login',loginController );











export default router;