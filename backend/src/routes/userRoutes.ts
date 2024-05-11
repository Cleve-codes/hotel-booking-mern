import express from "express"
import userControllers from "../controllers/userControllers";
import { jwtCheck } from "../middleware/Auth";

const router = express.Router();

router.post("/", jwtCheck, userControllers.createCurrentUser)

export default router;