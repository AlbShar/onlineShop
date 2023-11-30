import { Router } from "express"; 
import { checkRole } from "../middleware/checkRole";

const BrandController = require("../controllers/brand");

const router =  Router();

router.post("/", checkRole("ADMIN"), BrandController.create);
router.get('/', BrandController.getAll);

module.exports = router;