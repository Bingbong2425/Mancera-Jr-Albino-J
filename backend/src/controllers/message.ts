import { ApiError } from "../utils/custom-error";
import { Request, Response, NextFunction } from "express";
import pool from "../config/database-setup";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import { messages } from "../types/message-type";
export const CreateMessage = async (
  roomid: string,
  message?: string,
  userid?: string
) => {
  try {
    const messageId = uuidv4();

    // Update the JSONB column with the new message
    const newMessage = { id: messageId, message, userid };

    const result = await pool.query(
      `UPDATE public.messagestable
       SET messagecontent = COALESCE(messagecontent, '[]'::jsonb) || $1::jsonb
       WHERE roomid = $2
       RETURNING *`,
      [JSON.stringify([newMessage]), roomid]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error saving message:", error);
    throw error;
  }
};

export const CreateOrGetRoomId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { senderid, receiverid } = req.body;
    console.log(senderid, receiverid);
    if (!senderid && !receiverid) {
      return res.status(400).json({ msg: "" });
    }
    const findRoom = await pool.query(
      " SELECT roomid  FROM messagestable  WHERE (senderid = $1 AND receiverid = $2) OR (senderid = $2 AND receiverid = $1) LIMIT 1;",
      [senderid, receiverid]
    );

    if (findRoom.rows.length !== 0) {
      const result = findRoom.rows[0].roomid;
      return res.status(200).json(result);
    }

    const newRoomId = uuidv4();

    const createNewRoomId = await pool.query(
      "INSERT INTO public.messagestable (roomid, senderid, receiverid, messagecontent) VALUES ($1, $2, $3, '[]'::jsonb)  RETURNING roomid;",
      [newRoomId, senderid, receiverid]
    );
    return res.status(200).json(createNewRoomId.rows[0].roomid);
  } catch (error) {
    next(error);
  }
};

export const GetMessageById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roomid } = req.params;
    const findMessageByRoomId = await pool.query(
      "SELECT roomid, messagecontent FROM public.messagestable WHERE roomid = $1",
      [roomid]
    );
    const result = findMessageByRoomId.rows[0].messagecontent;
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
