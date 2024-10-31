import { Router } from "express";
import {
  CreateProfile,
  GetProfile,
  UpdateProfile,
  GetProfileId,
  GetAllUserProfile,
} from "../controllers/profile-controller";
const profileRoutes = Router();

profileRoutes.post("/create", CreateProfile);
profileRoutes.get("/:token", GetProfile);
profileRoutes.get("/user/:id", GetProfileId);
profileRoutes.get("/", GetAllUserProfile);
profileRoutes.put("/:userid", UpdateProfile);

export default profileRoutes;
