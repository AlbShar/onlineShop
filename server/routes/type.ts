import { Router } from "express"; 
import { checkRole } from "../middleware/checkRole";

const TypeController = require("../controllers/type");

const router =  Router();

router.post('/', checkRole("ADMIN"), TypeController.create);
router.get('/', TypeController.getAll);

module.exports = router;