import { Router } from "express";
import SessionController from "../controllers/sessions/sessions.controller";

const sessionRoutes = Router();

const sessionController = new SessionController();

sessionRoutes.post("/login", sessionController.store);


export default sessionRoutes;