import pool from "../config/database-setup";
import { ApiError } from "../utils/custom-error";
import { Request, Response, NextFunction } from "express";
import { notification } from "../types/notification";
export const NotificationCreate = async (data: notification) => {
  try {
    const {
      userpostid,
      postid,
      commentuserid,
      commentprofile,
      commentname,
      date,
    } = data;

    const result = await pool.query(
      "INSERT INTO public.notificationtable (userpostid, postid, commentuserid, commentprofile,commentname, date ) VALUES ($1, $2, $3, $4 , $5, $6) RETURNING *",
      [userpostid, postid, commentuserid, commentprofile, commentname, date]
    );

    if (result.rows.length == 0) {
      return "not sucess";
    }

    return result.rows[0];
  } catch (error) {
    console.error("Error saving message:", error);
    throw error;
  }
};

export const GetNotificatinById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userpostid } = req.params;

    const findByIdNotification = await pool.query(
      "SELECT * FROM public.notificationtable WHERE userpostid = $1",
      [userpostid]
    );

    if (findByIdNotification.rowCount === 0) {
      throw new ApiError("Notification not found", 404);
    }

    const result = findByIdNotification.rows;
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const DeleteNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const deleteNotification = await pool.query(
      "DELETE FROM public.    WHERE id = $1;",
      [id]
    );

    if (deleteNotification.rowCount === 0) {
      throw new ApiError("Notification not delete", 404);
    }

    return res.status(200).json({ msg: "Deleted Notification" });
  } catch (error) {
    next(error);
  }
};
