import pool from "../config/database-setup";
import { ApiError } from "../utils/custom-error";
import { Request, Response, NextFunction } from "express";
import cloudinary from "../services/cloudnary";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";

export const CreatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      userid,
      userphoto,
      text,
      photo,
      countheart,
      userheart,
      comments,
    } = req.body;
    let photoUrl: string = "";
    let cloudinaryid: string = "";
    if (photo && photo.trim() !== "") {
      const uploadedResponse = await cloudinary.v2.uploader.upload(photo, {
        upload_preset: "", // Use a proper upload preset or remove if not needed
      });

      if (!uploadedResponse || !uploadedResponse.url) {
        throw new ApiError("Image upload failed", 500);
      }

      photoUrl = uploadedResponse.url;
      cloudinaryid = uploadedResponse.public_id;
    }

    const { rows } = await pool.query(
      `INSERT INTO public.poststable (name, userid, cloudinaryid, userphoto, text, photo, countheart, userheart, comments)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [
        name,
        userid,
        cloudinaryid,
        userphoto,
        text,
        photoUrl, // Will be "" if no photo was uploaded
        countheart || 0,
        userheart || [],
        comments || [],
      ]
    );

    if (rows.length === 0) {
      throw new ApiError("Post not created", 404);
    }

    return res.status(201).json(rows[0]);
  } catch (error) {
    next(error); // Pass errors to the global error handler
  }
};

export const CreateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userid, username, photo, text, id } = req.body;
    const commentId = uuidv4(); // Generate a UUID for the new comment

    const result = await pool.query(
      `UPDATE public.poststable
       SET comments = jsonb_set(
         COALESCE(comments, '{}'), 
         '{${commentId}}', 
         $1::jsonb, 
         true
       )
       WHERE id = $2
       RETURNING *`,
      [JSON.stringify({ userid, username, photo, text }), id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
export const GetAllPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Fetch all posts from the poststable
    const getPost = await pool.query("SELECT * FROM public.poststable");

    const result = getPost.rows;
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const GetByIdPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    // Validate UUID format
    if (!uuidValidate(id)) {
      throw new ApiError("Invalid UUID format", 400);
    }

    const findByIdPost = await pool.query(
      "SELECT * FROM public.poststable WHERE id = $1",
      [id]
    );

    if (findByIdPost.rowCount === 0) {
      throw new ApiError("Post not found", 404);
    }

    const result = findByIdPost.rows[0];
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const GetUserByPostId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userid } = req.params;

    const getPost = await pool.query(
      "SELECT * FROM public.poststable WHERE userid = $1",
      [userid]
    );
    if (!getPost) {
      throw new ApiError("post not exist", 404);
    }
    const result = getPost.rows;
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const DeletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cloudinaryid, postid } = req.body;

    if (cloudinaryid) {
      await cloudinary.v2.uploader.destroy(cloudinaryid);
    }

    const deletePost = await pool.query(
      "DELETE FROM public.poststable WHERE id = $1",
      [postid]
    );
    if (!deletePost) {
      throw new ApiError("error", 404);
    }
    return res.status(200).json({ msg: "Post Deleted" });
  } catch (error) {
    next(error);
  }
};

export const DeleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postId, commentId } = req.params;

    const result = await pool.query(
      `UPDATE public.poststable
         SET comments = comments - $1
         WHERE id = $2
         RETURNING *`,
      [commentId, postId]
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ message: "Post not found or comment not deleted" });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
interface UserHeart {
  userid: string;
}
export const HeartAdd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postid, userid } = req.body;
    const userheart = uuidv4(); // Generate a UUID for the new comment

    const findByIdPostByUserHeart = await pool.query(
      "SELECT  userheart, countheart FROM poststable WHERE id = $1",
      [postid]
    );
    if (findByIdPostByUserHeart.rowCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    const post = findByIdPostByUserHeart.rows[0];
    const userhearts: Record<string, UserHeart> = post.userheart || {};
    let currentHeartCount = post.countheart || 0;
    const existingUserHeart = Object.values(userhearts).some(
      (heart: UserHeart) => heart.userid === userid
    );

    const updatedUserhearts = { ...userhearts };
    let updatedHeartCount = currentHeartCount;

    if (!existingUserHeart) {
      updatedUserhearts[uuidv4()] = { userid };
      updatedHeartCount += 1;
    }

    const result = await pool.query(
      `UPDATE poststable
       SET userheart = $1::jsonb,
           countheart = $2
       WHERE id = $3
       RETURNING *`,
      [JSON.stringify(updatedUserhearts), updatedHeartCount, postid]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
export const HeartDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { postid, userid } = req.body;

    const findByIdPostByUserHeart = await pool.query(
      "SELECT  userheart, countheart FROM public.poststable WHERE id = $1",
      [postid]
    );
    if (findByIdPostByUserHeart.rowCount === 0) {
      return res.status(404).json({ message: "Post not found" });
    }

    const post = findByIdPostByUserHeart.rows[0];
    const userhearts: Record<string, UserHeart> = post.userheart || {};
    let currentHeartCount = post.countheart || 0;

    const userHeartKey = Object.keys(userhearts).find(
      (key) => userhearts[key].userid === userid
    );

    if (!userHeartKey) {
      throw new ApiError("User heart not found for this post", 404);
    }

    delete userhearts[userHeartKey];
    const updatedHeartCount = currentHeartCount > 0 ? currentHeartCount - 1 : 0;

    await pool.query(
      "UPDATE poststable SET userheart = $1, countheart = $2 WHERE id = $3",
      [userhearts, updatedHeartCount, postid]
    );

    res.status(200).json({ message: "Heart removed successfully" });
  } catch (error) {
    next(error);
  }
};
