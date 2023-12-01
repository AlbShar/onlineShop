import { Router } from "express";
import { checkRole } from "../middleware/checkRole";

const BasketController = require("../controllers/basket");

const router = Router();

router.delete("/", checkRole("ADMIN"), BasketController.delete);
router.post("/", checkRole("ADMIN"), BasketController.add);
router.get("/", checkRole("ADMIN"), BasketController.getAll);

module.exports = router;
