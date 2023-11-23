import { Router } from "express"; 
const router =  Router();
const userController = require("../controllers/user");

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.checkAuth);

module.exports = router;