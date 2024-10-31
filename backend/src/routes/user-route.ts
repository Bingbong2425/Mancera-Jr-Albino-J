import { Router } from "express";
import {
  SendEmailUpdate,
  SignIn,
  SignUp,
  UpdateUser,
} from "../controllers/user-controller";

const userRoutes = Router();
userRoutes.post("/signin", SignIn);
userRoutes.post("/signup", SignUp);
userRoutes.post("/sendemail", SendEmailUpdate);
userRoutes.put("/:id", UpdateUser);

export default userRoutes;
