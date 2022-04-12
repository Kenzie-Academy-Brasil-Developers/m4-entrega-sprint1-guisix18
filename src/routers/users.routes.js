import { Router } from "express";
import UserController from "../controllers/user/user.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

import verifyEmailAvailability from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserIsAdm from "../middlewares/verifyUserIsAdm.middleware";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("", verifyEmailAvailability, userController.store);
userRoutes.get("", verifyAuthToken, verifyUserIsAdm, userController.index);

userRoutes.get("/profile", verifyAuthToken, userController.show);

userRoutes.put("/:uuid", verifyAuthToken, verifyUserIsAdm, userController.update);
userRoutes.delete("/:uuid", verifyAuthToken, verifyUserIsAdm, userController.delete);

export default userRoutes;