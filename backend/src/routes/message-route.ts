import { Router } from "express";
import { GetMessageById, CreateOrGetRoomId } from "../controllers/message";
const messageRoutes = Router();
messageRoutes.get("/:roomid", GetMessageById);
messageRoutes.post("/roomid", CreateOrGetRoomId);

export default messageRoutes;
