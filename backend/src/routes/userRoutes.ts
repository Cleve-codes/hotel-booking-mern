import express from "express"
import userControllers from "../controllers/userControllers";
import { jwtCheck, jwtParse } from "../middleware/Auth";
import { validateMyUserRequest } from "../middleware/vaildation";

const router = express.Router();

router.post("/", jwtCheck, userControllers.createCurrentUser)
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, userControllers.updateCurrentUser)

export default router;