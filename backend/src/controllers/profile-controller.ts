import pool from "../config/database-setup";
import { VerifyToken } from "../services/json-web-token";
import cloudinary from "../services/cloudnary";
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/custom-error";
import { profileTypes } from "../types/profile-type";
export const CreateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userid, name, profile, background } = req.body;

    // // Upload profile image
    const uploadProfileResult = await cloudinary.v2.uploader.upload(profile, {
      upload_preset: "", // Use your actual preset or omit if not needed
    });

    // Upload background image
    const uploadBackgroundResult = await cloudinary.v2.uploader.upload(
      background,
      {
        upload_preset: "", // Use your actual preset or omit if not needed
      }
    );

    if (!uploadProfileResult || !uploadBackgroundResult) {
      throw new ApiError("Image upload failed", 500);
    }

    // Insert profile into database
    const { rows } = await pool.query(
      "INSERT INTO public.profiletable (userid, name, profile, background) VALUES ($1, $2, $3, $4) RETURNING *",
      [userid, name, uploadProfileResult.url, uploadBackgroundResult.url]
    );

    if (rows.length === 0) {
      throw new ApiError("User profile not created", 404);
    }

    const updateUserVerify = await pool.query(
      "UPDATE usertable SET verify = 'verify' WHERE id = $1",
      [userid]
    );
    if (!updateUserVerify) {
      throw new ApiError("User not update", 404);
    }
    return res.status(201).json({ msg: "User profile created successfully" });
  } catch (error) {
    next(error);
  }
};

export const GetProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.params;
    const decoded = VerifyToken(token);

    const findUserId = await pool.query(
      "SELECT userid , name , profile , background FROM public.profiletable WHERE userid = $1",
      [decoded.id]
    );
    if (!findUserId) {
      throw new ApiError("Use profile not exist", 404);
    }
    const result: profileTypes = findUserId.rows[0];
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const GetProfileId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const findUserId = await pool.query(
      "SELECT * FROM public.profiletable WHERE userid = $1",
      [id]
    );
    if (!findUserId) {
      throw new ApiError("Use profile not exist", 404);
    }
    const result: profileTypes = findUserId.rows[0];
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const UpdateProfile = async (
  req: Request<{ userid: string }, {}, profileTypes>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userid } = req.params;
    const { name, profile, background } = req.body;
    const updateProfile = await pool.query(
      "UPDATE public.profiletable SET name = $1, profile = $2, background = $3 WHERE userid = $4 RETURNING *",
      [name, profile, background, userid]
    );
    if (!updateProfile) {
      throw new ApiError("Use profile not updated", 404);
    }
    const result: profileTypes = updateProfile.rows[0];
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const GetAllUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const getAllUser = await pool.query("SELECT * FROM public.profiletable");

    if (getAllUser.rows.length == 0) {
      throw new ApiError("User not exist", 404);
    }

    const result = getAllUser.rows;

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
