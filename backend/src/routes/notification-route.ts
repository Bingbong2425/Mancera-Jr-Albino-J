import { Router } from "express";
import {
  GetNotificatinById,
  DeleteNotification,
} from "../controllers/notification-controller";
const notificationRoutes = Router();

notificationRoutes.get("/:userpostid", GetNotificatinById);
notificationRoutes.delete("/:id", DeleteNotification);

export default notificationRoutes;
