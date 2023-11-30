import { Router } from "express";
import { checkRole } from "../middleware/checkRole";

const BasketController = require("../controllers/basket");

const router = Router();

router.delete("/", checkRole("ADMIN"), BasketController.delete);

module.exports = router;
