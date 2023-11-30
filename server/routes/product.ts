import { Router } from "express"; 
import { checkRole } from "../middleware/checkRole";

const ProductController = require("../controllers/product");

const router =  Router();

router.post("/", checkRole("ADMIN"), ProductController.create);
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);

module.exports = router;