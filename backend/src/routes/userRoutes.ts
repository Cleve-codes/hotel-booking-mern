import express from "express"
import userControllers from "../controllers/userControllers";
import { jwtCheck, jwtParse } from "../middleware/Auth";

const router = express.Router();

router.post("/", jwtCheck, userControllers.createCurrentUser)
router.put("/", jwtParse ,userControllers.updateCurrentUser)

export default router;