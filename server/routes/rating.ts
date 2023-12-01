import { Router } from "express";
import { checkRole } from "../middleware/checkRole";

const RatingController = require("../controllers/rating");

const router = Router();

router.post("/", checkRole("ADMIN"), RatingController.setRating);
router.get("/", checkRole("ADMIN"), RatingController.getRatings);

module.exports = router;
