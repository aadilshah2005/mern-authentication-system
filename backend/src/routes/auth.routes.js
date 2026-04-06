import express from "express";
import { getProfile, userLogin, userLogOut, userRegister } from "../controllers/auth.controller.js";
import {isAuth} from "../middlewares/isAuth.middleware.js";

const routes = express.Router();

routes.post('/register', userRegister);
routes.post('/login', userLogin);
routes.get('/logout', userLogOut);
routes.get('/profile', isAuth ,getProfile);

export default routes;