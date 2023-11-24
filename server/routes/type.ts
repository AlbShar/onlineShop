import { Router } from "express"; 
const TypeController = require("../controllers/type");

const router =  Router();

router.post('/', TypeController.create);
router.get('/', TypeController.getAll);

module.exports = router;