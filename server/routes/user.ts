import { Router } from "express"; 
import { authMiddleware } from "../middleware/auth";

const router =  Router();
const userController = require("../controllers/user");


router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.checkAuth);

module.exports = router;