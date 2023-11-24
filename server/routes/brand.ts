import { Router } from "express"; 
const BrandController = require("../controllers/brand");

const router =  Router();

router.post('/', BrandController.create);
router.get('/', BrandController.getAll);

module.exports = router;