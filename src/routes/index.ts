import { Router } from "express";
import userRouter from "./user.routes";

const routes: Array<Router> = [userRouter];

export default routes;