import { Router } from "express"; 
const ProductController = require("../controllers/product");

const router =  Router();

router.post('/', ProductController.create);
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);

module.exports = router;